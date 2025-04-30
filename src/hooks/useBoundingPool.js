import { useState, useCallback, useEffect } from "react";
import {
  useAccount,
  useWriteContract,
  useReadContract,
  useWaitForTransactionReceipt,
  useChainId,
} from "wagmi";
import { readContract, waitForTransaction } from "@wagmi/core";
import { parseUnits, formatUnits } from "viem";
import {
  BOUNDING_ABI,
  PAHROS_BOUNDING_CONTRACT_ADDRESS,
  CELO_BOUNDING_CONTRACT_ADDRESS,
} from "@/utils/ABI/Bounding";
import { erc20Abi } from "@/utils/ABI";
import { toast } from "react-toastify";
import { config } from "@/providers/Wagmi";

export function useBondingPool() {
  const { address } = useAccount();
  const chainId = useChainId();
  const [isApproving, setIsApproving] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [currentTxHash, setCurrentTxHash] = useState(null);
  const [approvalTxHash, setApprovalTxHash] = useState(null);
  const [swapStatus, setSwapStatus] = useState({
    status: null, // 'success', 'error', 'pending', null
    txHash: null,
    error: null,
    timestamp: null,
  });

  // Get the correct bonding contract address based on the current chain
  const getBondingContractAddress = useCallback(() => {
    // Pharos chain ID
    if (chainId === 50002) {
      return PAHROS_BOUNDING_CONTRACT_ADDRESS;
    }
    // Celo Alfajores
    if (chainId === 44787) {
      return CELO_BOUNDING_CONTRACT_ADDRESS;
    }
    return null;
  }, [chainId]);

  const bondingContractAddress = getBondingContractAddress();

  // Contract write hooks
  const { writeContractAsync: approveTokenAsync } = useWriteContract();
  const { writeContractAsync: swapAsync } = useWriteContract();
  const { writeContractAsync: emergencyWithdrawAsync } = useWriteContract();

  // Transaction receipt hooks
  const { data: txReceipt, isLoading: isWaitingForReceipt } =
    useWaitForTransactionReceipt({
      hash: currentTxHash,
    });

  // Pool info reader
  const { data: poolInfo, refetch: refetchPoolInfo } = useReadContract({
    address: bondingContractAddress,
    abi: BOUNDING_ABI,
    functionName: "getPoolInfo",
    enabled: !!bondingContractAddress,
  });

  // Token price reader
  const { data: tokenPrice, refetch: refetchTokenPrice } = useReadContract({
    address: bondingContractAddress,
    abi: BOUNDING_ABI,
    functionName: "getTokenPrice",
    enabled: !!bondingContractAddress,
  });

  // Get token address from pool info
  const tokenAddress = poolInfo?.[0] || null;

  // Effect to handle transaction receipt updates
  useEffect(() => {
    if (txReceipt && currentTxHash) {
      const status = txReceipt.status === "success" ? "success" : "error";
      setSwapStatus({
        status,
        txHash: currentTxHash,
        error: status === "error" ? "Transaction failed" : null,
        timestamp: Date.now(),
      });

      // Only reset isSwapping if this was a swap transaction
      if (isSwapping) {
        setIsSwapping(false);
        // Show toast notification
        if (status === "success") {
          toast.success("Swap completed successfully!");
          // Refresh pool info and token price
          refetchPoolInfo();
          refetchTokenPrice();
        } else {
          toast.error("Swap failed. Check transaction for details.");
        }
      }

      // Reset currentTxHash after processing
      setCurrentTxHash(null);
    }
  }, [
    txReceipt,
    currentTxHash,
    isSwapping,
    refetchPoolInfo,
    refetchTokenPrice,
  ]);

  // Function to check token allowance - using readContract instead of hook
  const checkTokenAllowance = useCallback(
    async (tokenAddress, amountInWei) => {
      try {
        if (!bondingContractAddress || !address) {
          throw new Error("Missing contract address or user address");
        }

        // Use readContract function (not hook) to fetch allowance
        const allowance = await readContract(config, {
          address: tokenAddress,
          abi: erc20Abi,
          functionName: "allowance",
          args: [address, bondingContractAddress],
        });

        return {
          allowance,
          needsApproval: allowance < amountInWei,
        };
      } catch (error) {
        console.error("Error checking allowance:", error);
        throw new Error("Failed to check token allowance");
      }
    },
    [bondingContractAddress, address]
  );

  // Function to approve token spending with direct transaction waiting
  const approveToken = useCallback(
    async (tokenAddress, amountInWei) => {
      try {
        setIsApproving(true);

        const hash = await approveTokenAsync({
          address: tokenAddress,
          abi: erc20Abi,
          functionName: "approve",
          args: [bondingContractAddress, amountInWei],
        });

        setApprovalTxHash(hash);
        toast.info("Approving token transfer...");

        // Directly wait for the transaction completion
        const receipt = await waitForTransaction(config, {
          hash,
        });

        if (receipt.status !== "success") {
          throw new Error("Approval transaction failed");
        }

        return true;
      } catch (error) {
        console.error("Error approving token:", error);
        toast.error(
          `Error approving token: ${error.message || "Unknown error"}`
        );
        return false;
      } finally {
        setIsApproving(false);
        setApprovalTxHash(null);
      }
    },
    [bondingContractAddress, approveTokenAsync]
  );

  // Function to get token reserves (preview)
  const getReserves = useCallback(
    async (amount, swapType) => {
      try {
        if (!bondingContractAddress) {
          throw new Error("No bonding contract address available");
        }

        const reserves = await readContract(config, {
          address: bondingContractAddress,
          abi: BOUNDING_ABI,
          functionName: "getReserves",
          args: [BigInt(amount), BigInt(swapType)],
        });

        return reserves;
      } catch (error) {
        console.error("Error getting reserves:", error);
        throw error;
      }
    },
    [bondingContractAddress]
  );

  // Swap function - Buy tokens with ETH (type 0) or Sell tokens for ETH (type 1)
  const swap = useCallback(
    async (amount, swapType) => {
      try {
        if (!bondingContractAddress) {
          throw new Error("Unsupported chain");
        }

        setIsSwapping(true);
        setSwapStatus({
          status: "pending",
          txHash: null,
          error: null,
          timestamp: Date.now(),
        });

        // For selling tokens (type 1), we need to approve first
        if (swapType === 1 && tokenAddress) {
          const { needsApproval } = await checkTokenAllowance(
            tokenAddress,
            BigInt(amount)
          );

          if (needsApproval) {
            const isApproved = await approveToken(tokenAddress, BigInt(amount));
            if (!isApproved) {
              throw new Error("Token approval failed or was rejected");
            }
          }
        }

        // Prepare transaction parameters
        const params = {
          address: bondingContractAddress,
          abi: BOUNDING_ABI,
          functionName: "swap",
          args: [BigInt(amount), BigInt(swapType)],
        };

        // If buying tokens (type 0), we need to include ETH value
        if (swapType === 0) {
          params.value = BigInt(amount);
        }

        // Execute swap
        const hash = await swapAsync(params);

        setCurrentTxHash(hash);
        setSwapStatus((prev) => ({
          ...prev,
          txHash: hash,
        }));

        toast.info(swapType === 0 ? "Buying tokens..." : "Selling tokens...");
        return hash;
      } catch (error) {
        console.error("Error swapping tokens:", error);
        setSwapStatus({
          status: "error",
          txHash: null,
          error: error.message || "Unknown error",
          timestamp: Date.now(),
        });

        toast.error(`Swap failed: ${error.message || "Unknown error"}`);
        return null;
      } finally {
        if (!currentTxHash) {
          setIsSwapping(false);
        }
      }
    },
    [
      bondingContractAddress,
      tokenAddress,
      checkTokenAllowance,
      approveToken,
      swapAsync,
      currentTxHash,
    ]
  );

  // Emergency withdrawal function (owner only)
  const emergencyWithdraw = useCallback(
    async (toAddress, amount) => {
      try {
        if (!bondingContractAddress) {
          throw new Error("Unsupported chain");
        }

        setIsSwapping(true);
        setSwapStatus({
          status: "pending",
          txHash: null,
          error: null,
          timestamp: Date.now(),
        });

        // Execute emergency withdrawal
        const hash = await emergencyWithdrawAsync({
          address: bondingContractAddress,
          abi: BOUNDING_ABI,
          functionName: "emergencyWithdraw",
          args: [toAddress, BigInt(amount)],
        });

        setCurrentTxHash(hash);
        setSwapStatus((prev) => ({
          ...prev,
          txHash: hash,
        }));

        toast.info("Processing emergency withdrawal...");
        return hash;
      } catch (error) {
        console.error("Error in emergency withdrawal:", error);
        setSwapStatus({
          status: "error",
          txHash: null,
          error: error.message || "Unknown error",
          timestamp: Date.now(),
        });

        toast.error(
          `Emergency withdrawal failed: ${error.message || "Unknown error"}`
        );
        return null;
      } finally {
        if (!currentTxHash) {
          setIsSwapping(false);
        }
      }
    },
    [bondingContractAddress, emergencyWithdrawAsync, currentTxHash]
  );

  // Function to wrap common token buying operation
  const buyTokens = useCallback(
    async (ethAmount) => {
      try {
        // Convert ETH amount to wei
        const amountInWei = parseUnits(ethAmount.toString(), 18);

        // Call swap with type 0 (buy)
        return await swap(amountInWei, 0);
      } catch (error) {
        console.error("Error buying tokens:", error);
        throw error;
      }
    },
    [swap]
  );

  // Function to wrap common token selling operation
  const sellTokens = useCallback(
    async (tokenAmount, tokenDecimals = 18) => {
      try {
        if (!tokenAddress) {
          throw new Error("Token address not available");
        }

        // Convert token amount to wei based on token decimals
        const amountInWei = parseUnits(tokenAmount.toString(), tokenDecimals);

        // Call swap with type 1 (sell)
        return await swap(amountInWei, 1);
      } catch (error) {
        console.error("Error selling tokens:", error);
        throw error;
      }
    },
    [swap, tokenAddress]
  );

  // Format and return pool data in a more usable format
  const getFormattedPoolData = useCallback(() => {
    if (!poolInfo) return null;

    // Extract data from poolInfo
    const [
      tokenAddress,
      feeSettings,
      numericSettings,
      poolDetailsStr,
      kycLink,
      auditLink,
      tokenTotalSupply,
      v3Pair,
      holders,
      circulatingSupply,
      marketCap,
    ] = poolInfo;

    return {
      tokenAddress,
      poolState: numericSettings?.[0] || 0, // 0 = Active, 1 = Closed, 2 = Finalized
      poolType: numericSettings?.[1] || 0,
      tokenTotalSupply: formatUnits(tokenTotalSupply || 0n, 18),
      tokenPrice: tokenPrice ? formatUnits(tokenPrice, 18) : "0",
      circulatingSupply: formatUnits(circulatingSupply || 0n, 18),
      marketCap: formatUnits(marketCap || 0n, 18),
      holders: holders || [],
      holderCount: holders?.length || 0,
      v3Pair,
      kycLink,
      auditLink,
      poolDetails: poolDetailsStr,
    };
  }, [poolInfo, tokenPrice]);

  // Clear swap status (useful for UI resets)
  const clearSwapStatus = useCallback(() => {
    setSwapStatus({
      status: null,
      txHash: null,
      error: null,
      timestamp: null,
    });
  }, []);

  return {
    // Contract interactions
    buyTokens,
    sellTokens,
    swap,
    emergencyWithdraw,
    getReserves,

    // Data getters
    poolInfo,
    tokenPrice,
    getFormattedPoolData,
    refetchPoolInfo,
    refetchTokenPrice,

    // Status indicators
    isApproving,
    isSwapping,
    isProcessing: isApproving || isSwapping || isWaitingForReceipt,
    currentTxHash,
    txReceipt,
    swapStatus,
    clearSwapStatus,
  };
}
