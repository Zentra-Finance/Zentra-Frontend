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
  LAUNCH_ABI,
  PAHROS_LAUNCH_CONTRACT_ADDRESS,
  CELO_LAUNCH_CONTRACT_ADDRESS,
} from "@/utils/ABI/FairLaunch";
import { erc20Abi } from "@/utils/ABI";
import { toast } from "react-toastify";
import { config } from "@/providers/Wagmi";

export function useLaunchPool() {
  const { address } = useAccount();
  const chainId = useChainId();
  const [isApproving, setIsApproving] = useState(false);
  const [isContributing, setIsContributing] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [currentTxHash, setCurrentTxHash] = useState(null);
  const [approvalTxHash, setApprovalTxHash] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState({
    status: null, // 'success', 'error', 'pending', null
    txHash: null,
    error: null,
    timestamp: null,
  });

  // Get the correct launch contract address based on the current chain
  const getLaunchContractAddress = useCallback(() => {
    // Pharos chain ID
    if (chainId === 50002) {
      return PAHROS_LAUNCH_CONTRACT_ADDRESS;
    }
    // Celo Alfajores
    if (chainId === 44787) {
      return CELO_LAUNCH_CONTRACT_ADDRESS;
    }
    return null;
  }, [chainId]);

  const launchContractAddress = getLaunchContractAddress();

  // Contract write hooks
  const { writeContractAsync: approveTokenAsync } = useWriteContract();
  const { writeContractAsync: contributeAsync } = useWriteContract();
  const { writeContractAsync: claimAsync } = useWriteContract();
  const { writeContractAsync: withdrawContributionAsync } = useWriteContract();
  const { writeContractAsync: finalizeAsync } = useWriteContract();
  const { writeContractAsync: cancelAsync } = useWriteContract();
  const { writeContractAsync: emergencyWithdrawAsync } = useWriteContract();

  // Transaction receipt hooks
  const { data: txReceipt, isLoading: isWaitingForReceipt } =
    useWaitForTransactionReceipt({
      hash: currentTxHash,
    });

  // Pool info reader
  const { data: poolInfo, refetch: refetchPoolInfo } = useReadContract({
    address: launchContractAddress,
    abi: LAUNCH_ABI,
    functionName: "getPoolInfo",
    enabled: !!launchContractAddress,
  });

  // Token price reader
  const { data: tokenPrice, refetch: refetchTokenPrice } = useReadContract({
    address: launchContractAddress,
    abi: LAUNCH_ABI,
    functionName: "getPrice",
    enabled: !!launchContractAddress,
  });

  // Pool state reader
  const { data: poolState, refetch: refetchPoolState } = useReadContract({
    address: launchContractAddress,
    abi: LAUNCH_ABI,
    functionName: "poolState",
    enabled: !!launchContractAddress,
  });

  // Total raised reader
  const { data: totalRaised, refetch: refetchTotalRaised } = useReadContract({
    address: launchContractAddress,
    abi: LAUNCH_ABI,
    functionName: "totalRaised",
    enabled: !!launchContractAddress,
  });

  // User contribution reader
  const { data: userContribution, refetch: refetchUserContribution } =
    useReadContract({
      address: launchContractAddress,
      abi: LAUNCH_ABI,
      functionName: "contributionOf",
      args: [address],
      enabled: !!launchContractAddress && !!address,
    });

  // User available claim reader
  const { data: userAvailableClaim, refetch: refetchUserAvailableClaim } =
    useReadContract({
      address: launchContractAddress,
      abi: LAUNCH_ABI,
      functionName: "userAvalibleClaim",
      args: [address],
      enabled: !!launchContractAddress && !!address,
    });

  // Get token address from pool info
  const tokenAddress = poolInfo?.[0] || null;
  const currencyAddress = poolInfo?.[1] || null;

  // Function to refetch all data
  const refetchAllData = useCallback(() => {
    refetchPoolInfo();
    refetchTokenPrice();
    refetchPoolState();
    refetchTotalRaised();
    if (address) {
      refetchUserContribution();
      refetchUserAvailableClaim();
    }
  }, [
    refetchPoolInfo,
    refetchTokenPrice,
    refetchPoolState,
    refetchTotalRaised,
    refetchUserContribution,
    refetchUserAvailableClaim,
    address,
  ]);

  // Effect to handle transaction receipt updates
  useEffect(() => {
    if (txReceipt && currentTxHash) {
      const status = txReceipt.status === "success" ? "success" : "error";
      setTransactionStatus({
        status,
        txHash: currentTxHash,
        error: status === "error" ? "Transaction failed" : null,
        timestamp: Date.now(),
      });

      // Reset appropriate state based on which operation was performed
      if (isContributing) {
        setIsContributing(false);
        status === "success"
          ? toast.success("Contribution successful!")
          : toast.error("Contribution failed. Check transaction for details.");
      } else if (isClaiming) {
        setIsClaiming(false);
        status === "success"
          ? toast.success("Tokens claimed successfully!")
          : toast.error("Token claim failed. Check transaction for details.");
      } else if (isWithdrawing) {
        setIsWithdrawing(false);
        status === "success"
          ? toast.success("Withdrawal successful!")
          : toast.error("Withdrawal failed. Check transaction for details.");
      }

      // Refresh all data
      refetchAllData();

      // Reset currentTxHash after processing
      setCurrentTxHash(null);
    }
  }, [
    txReceipt,
    currentTxHash,
    isContributing,
    isClaiming,
    isWithdrawing,
    refetchAllData,
  ]);

  // Function to check token allowance for ERC20 token contributions
  const checkTokenAllowance = useCallback(
    async (tokenAddress, amountInWei) => {
      try {
        if (!launchContractAddress || !address) {
          throw new Error("Missing contract address or user address");
        }

        // Use readContract function to fetch allowance
        const allowance = await readContract(config, {
          address: tokenAddress,
          abi: erc20Abi,
          functionName: "allowance",
          args: [address, launchContractAddress],
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
    [launchContractAddress, address]
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
          args: [launchContractAddress, amountInWei],
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
    [launchContractAddress, approveTokenAsync]
  );

  // Function to contribute to the launch pool
  const contribute = useCallback(
    async (amount) => {
      try {
        if (!launchContractAddress) {
          throw new Error("Unsupported chain");
        }

        setIsContributing(true);
        setTransactionStatus({
          status: "pending",
          txHash: null,
          error: null,
          timestamp: Date.now(),
        });

        // Parse amount to BigInt with proper decimals
        const amountInWei = parseUnits(amount.toString(), 18);

        // For ERC20 token contribution, check and handle approval
        if (
          currencyAddress &&
          currencyAddress !== "0x0000000000000000000000000000000000000000"
        ) {
          const { needsApproval } = await checkTokenAllowance(
            currencyAddress,
            amountInWei
          );

          if (needsApproval) {
            const isApproved = await approveToken(currencyAddress, amountInWei);
            if (!isApproved) {
              throw new Error("Token approval failed or was rejected");
            }
          }
        }

        // Prepare transaction parameters
        const params = {
          address: launchContractAddress,
          abi: LAUNCH_ABI,
          functionName: "contribute",
          args: [amountInWei],
        };

        // If native currency contribution, include value
        if (
          !currencyAddress ||
          currencyAddress === "0x0000000000000000000000000000000000000000"
        ) {
          params.value = amountInWei;
        }

        // Execute contribute
        const hash = await contributeAsync(params);

        setCurrentTxHash(hash);
        setTransactionStatus((prev) => ({
          ...prev,
          txHash: hash,
        }));

        toast.info("Processing contribution...");
        return hash;
      } catch (error) {
        console.error("Error contributing:", error);
        setTransactionStatus({
          status: "error",
          txHash: null,
          error: error.message || "Unknown error",
          timestamp: Date.now(),
        });

        toast.error(`Contribution failed: ${error.message || "Unknown error"}`);
        setIsContributing(false);
        return null;
      }
    },
    [
      launchContractAddress,
      currencyAddress,
      checkTokenAllowance,
      approveToken,
      contributeAsync,
    ]
  );

  // Function to claim tokens
  const claim = useCallback(async () => {
    try {
      if (!launchContractAddress) {
        throw new Error("Unsupported chain");
      }

      setIsClaiming(true);
      setTransactionStatus({
        status: "pending",
        txHash: null,
        error: null,
        timestamp: Date.now(),
      });

      // Execute claim
      const hash = await claimAsync({
        address: launchContractAddress,
        abi: LAUNCH_ABI,
        functionName: "claim",
      });

      setCurrentTxHash(hash);
      setTransactionStatus((prev) => ({
        ...prev,
        txHash: hash,
      }));

      toast.info("Claiming tokens...");
      return hash;
    } catch (error) {
      console.error("Error claiming tokens:", error);
      setTransactionStatus({
        status: "error",
        txHash: null,
        error: error.message || "Unknown error",
        timestamp: Date.now(),
      });

      toast.error(`Claim failed: ${error.message || "Unknown error"}`);
      setIsClaiming(false);
      return null;
    }
  }, [launchContractAddress, claimAsync]);

  // Function to withdraw contribution
  const withdrawContribution = useCallback(async () => {
    try {
      if (!launchContractAddress) {
        throw new Error("Unsupported chain");
      }

      setIsWithdrawing(true);
      setTransactionStatus({
        status: "pending",
        txHash: null,
        error: null,
        timestamp: Date.now(),
      });

      // Execute withdraw
      const hash = await withdrawContributionAsync({
        address: launchContractAddress,
        abi: LAUNCH_ABI,
        functionName: "withdrawContribution",
      });

      setCurrentTxHash(hash);
      setTransactionStatus((prev) => ({
        ...prev,
        txHash: hash,
      }));

      toast.info("Withdrawing contribution...");
      return hash;
    } catch (error) {
      console.error("Error withdrawing contribution:", error);
      setTransactionStatus({
        status: "error",
        txHash: null,
        error: error.message || "Unknown error",
        timestamp: Date.now(),
      });

      toast.error(`Withdrawal failed: ${error.message || "Unknown error"}`);
      setIsWithdrawing(false);
      return null;
    }
  }, [launchContractAddress, withdrawContributionAsync]);

  // Function to finalize the launch (owner only)
  const finalize = useCallback(async () => {
    try {
      if (!launchContractAddress) {
        throw new Error("Unsupported chain");
      }

      setTransactionStatus({
        status: "pending",
        txHash: null,
        error: null,
        timestamp: Date.now(),
      });

      // Execute finalize
      const hash = await finalizeAsync({
        address: launchContractAddress,
        abi: LAUNCH_ABI,
        functionName: "finalize",
      });

      setCurrentTxHash(hash);
      setTransactionStatus((prev) => ({
        ...prev,
        txHash: hash,
      }));

      toast.info("Finalizing launch pool...");
      return hash;
    } catch (error) {
      console.error("Error finalizing launch pool:", error);
      setTransactionStatus({
        status: "error",
        txHash: null,
        error: error.message || "Unknown error",
        timestamp: Date.now(),
      });

      toast.error(`Finalization failed: ${error.message || "Unknown error"}`);
      return null;
    }
  }, [launchContractAddress, finalizeAsync]);

  // Function to cancel the launch (owner only)
  const cancel = useCallback(async () => {
    try {
      if (!launchContractAddress) {
        throw new Error("Unsupported chain");
      }

      setTransactionStatus({
        status: "pending",
        txHash: null,
        error: null,
        timestamp: Date.now(),
      });

      // Execute cancel
      const hash = await cancelAsync({
        address: launchContractAddress,
        abi: LAUNCH_ABI,
        functionName: "cancel",
      });

      setCurrentTxHash(hash);
      setTransactionStatus((prev) => ({
        ...prev,
        txHash: hash,
      }));

      toast.info("Cancelling launch pool...");
      return hash;
    } catch (error) {
      console.error("Error canceling launch pool:", error);
      setTransactionStatus({
        status: "error",
        txHash: null,
        error: error.message || "Unknown error",
        timestamp: Date.now(),
      });

      toast.error(`Cancellation failed: ${error.message || "Unknown error"}`);
      return null;
    }
  }, [launchContractAddress, cancelAsync]);

  // Function for emergency withdrawal (owner only)
  const emergencyWithdraw = useCallback(
    async (toAddress, amount) => {
      try {
        if (!launchContractAddress) {
          throw new Error("Unsupported chain");
        }

        setTransactionStatus({
          status: "pending",
          txHash: null,
          error: null,
          timestamp: Date.now(),
        });

        // Convert amount to BigInt
        const amountInWei = parseUnits(amount.toString(), 18);

        // Execute emergency withdrawal
        const hash = await emergencyWithdrawAsync({
          address: launchContractAddress,
          abi: LAUNCH_ABI,
          functionName: "emergencyWithdraw",
          args: [toAddress, amountInWei],
        });

        setCurrentTxHash(hash);
        setTransactionStatus((prev) => ({
          ...prev,
          txHash: hash,
        }));

        toast.info("Processing emergency withdrawal...");
        return hash;
      } catch (error) {
        console.error("Error in emergency withdrawal:", error);
        setTransactionStatus({
          status: "error",
          txHash: null,
          error: error.message || "Unknown error",
          timestamp: Date.now(),
        });

        toast.error(
          `Emergency withdrawal failed: ${error.message || "Unknown error"}`
        );
        return null;
      }
    },
    [launchContractAddress, emergencyWithdrawAsync]
  );

  // Format and return pool data in a more usable format
  const getFormattedPoolData = useCallback(() => {
    if (!poolInfo) return null;

    const [
      tokenAddress,
      currencyAddress,
      numericalParams,
      timeParams,
      poolDetailsStr,
      kycLink,
      auditLink,
      softCap,
      hardCap,
      router,
    ] = poolInfo;

    // Based on ABI, these should be the numerical parameters
    const poolState = poolInfo?.[2]?.[0] || 0;
    const poolType = poolInfo?.[2]?.[1] || 0;

    return {
      tokenAddress,
      currencyAddress,
      poolState, // 0 = Active, 1 = Closed, 2 = Finalized, 3 = Cancelled
      poolType,
      tokenPrice: tokenPrice ? formatUnits(tokenPrice, 18) : "0",
      softCap: formatUnits(softCap || 0n, 18),
      hardCap: formatUnits(hardCap || 0n, 18),
      totalRaised: totalRaised ? formatUnits(totalRaised, 18) : "0",
      userContribution: userContribution
        ? formatUnits(userContribution, 18)
        : "0",
      userAvailableClaim: userAvailableClaim
        ? formatUnits(userAvailableClaim, 18)
        : "0",
      startTime: timeParams?.[0]
        ? new Date(Number(timeParams[0]) * 1000)
        : null,
      endTime: timeParams?.[1] ? new Date(Number(timeParams[1]) * 1000) : null,
      router,
      kycLink,
      auditLink,
      poolDetails: poolDetailsStr,
    };
  }, [poolInfo, tokenPrice, totalRaised, userContribution, userAvailableClaim]);

  // Clear transaction status (useful for UI resets)
  const clearTransactionStatus = useCallback(() => {
    setTransactionStatus({
      status: null,
      txHash: null,
      error: null,
      timestamp: null,
    });
  }, []);

  return {
    // Contract interactions
    contribute,
    claim,
    withdrawContribution,
    finalize,
    cancel,
    emergencyWithdraw,

    // Data getters
    poolInfo,
    tokenPrice,
    poolState,
    totalRaised,
    userContribution,
    userAvailableClaim,
    getFormattedPoolData,
    refetchAllData,

    // Status indicators
    isApproving,
    isContributing,
    isClaiming,
    isWithdrawing,
    isProcessing:
      isApproving ||
      isContributing ||
      isClaiming ||
      isWithdrawing ||
      isWaitingForReceipt,
    currentTxHash,
    txReceipt,
    transactionStatus,
    clearTransactionStatus,
  };
}
