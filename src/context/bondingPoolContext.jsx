// import {
// 	createContext,
// 	useCallback,
// 	useContext,
// 	useEffect,
// 	useState,
// } from "react";
// import { Contract } from "ethers";
// // import ABI from "../ABI/proposal.json";
// import usePoolFactoryContract from "@/hooks/usePoolFactoryContract";
// import useEthersProvider from "@/hooks/useEthersProvider";
// import {
// 	POOL_FACTORY_ABI,
// 	PAHROS_POOL_FACTORY_ADDRESS,
// } from "@/utils/ABI/PoolFactory";
// import { useAccount } from "wagmi";

// export const BondingPoolContext = createContext({
// 	bondingTokenCreated: false,
// });

// export const BondingPoolContextProvider = ({ children }) => {
// 	const { address } = useAccount();
// 	const poolFactoryContract = usePoolFactoryContract(true);
// 	const readOnlyPoolFactoryContract = usePoolFactoryContract(false);
// 	const { readOnlyProvider, signer } = useEthersProvider();
// 	const [bondingTokenCreated, setBondingTokenCreated] = useState(false);


// 	const bondingTokenCreatedHandler = useCallback(
// 		(creator, poolAddress, token) => {
// 			console.log({ creator, poolAddress, token });
// 			if (creator === address) {
// 				console.log("Trueeeeeeeeeeeeeeeeeeeeeeeee")
// 				setBondingTokenCreated(true);
// 			}
// 		},
// 		[]
// 	);

// 	useEffect(() => {
// 		// // const filter = readOnlyProposalContract.filter.ProposalCreated()
// 		const contract = new Contract(
// 			PAHROS_POOL_FACTORY_ADDRESS,
// 			POOL_FACTORY_ABI,
// 			readOnlyProvider
// 			// signer
// 		);

// 		const check = async () => {
// 			const bondingTokenCreationFee =
// 				await contract.bondingTokenCreationFee.staticCall();
// 			console.log({ bondingTokenCreationFee });
// 		};
// 		check();
// 		// contract.on("BondingTokenCreated", bondingTokenCreatedHandler);
// 		console.log("created listener added");
// 		return () => {
// 			// contract.off("BondingTokenCreated", bondingTokenCreatedHandler);
// 			console.log("created listener removed");
// 		};
// 	}, [bondingTokenCreatedHandler, readOnlyProvider]);

// 	console.log("Loading");

// 	return (
// 		<BondingPoolContext.Provider
// 			value={{
// 				bondingTokenCreated,
// 			}}
// 		>
// 			{children}
// 		</BondingPoolContext.Provider>
// 	);
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export const useBondingPools = () => {
// 	const context = useContext(BondingPoolContext);
// 	if (!context)
// 		return console.error(
// 			"useBondingPools should be used within BondingPoolContextProvider"
// 		);
// 	return context;
// };


import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Contract, Interface } from "ethers";
import usePoolFactoryContract from "@/hooks/usePoolFactoryContract";
import useEthersProvider from "@/hooks/useEthersProvider";
import {
  POOL_MANAGER_ABI,
  PHAROS_POOL_MANAGER_ADDRESS,
} from "@/utils/ABI/PoolManager";
import { useAccount } from "wagmi";

// Multicall config for batch requests
const multicall3Addr = "0x3308CC3B0b2fCD4E9994E210A8290649d61360D7";
const multicallAbi = [
  "function tryAggregate(bool requireSuccess, (address target, bytes callData)[] calls) returns ((bool success, bytes returnData)[] returnData)",
];

export const BondingPoolContext = createContext({
  bondingTokenCreated: false,
  bondingPools: [],
  fairPools: [],
  isFetching: true,
  totalParticipants: 0,
  totalValueLocked: {},
});

export const BondingPoolContextProvider = ({ children }) => {
  const { address } = useAccount();
  const poolFactoryContract = usePoolFactoryContract(true);
  const readOnlyPoolFactoryContract = usePoolFactoryContract(false);
  const { readOnlyProvider, signer } = useEthersProvider();

  const [bondingTokenCreated, setBondingTokenCreated] = useState(false);
  const [bondingPools, setBondingPools] = useState([]);
  const [fairPools, setFairPools] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [totalValueLocked, setTotalValueLocked] = useState({});

  const bondingTokenCreatedHandler = useCallback(
    (creator, poolAddress, token) => {
      console.log({ creator, poolAddress, token });
      if (creator === address) {
        console.log("Bonding token created successfully!");
        setBondingTokenCreated(true);
      }
    },
    [address]
  );

  const fetchPoolData = useCallback(async () => {
    if (!readOnlyProvider || !isFetching) return;

    const poolManagerContract = new Contract(
      PHAROS_POOL_MANAGER_ADDRESS,
      POOL_MANAGER_ABI,
      readOnlyProvider
    );

    const multicallContract = new Contract(
      multicall3Addr,
      multicallAbi,
      readOnlyProvider
    );

    try {
      // Get all pools data
      const [
        bondingPoolsAddresses,
        fairPoolsAddresses,
        totalParticipantsCount,
      ] = await Promise.all([
        poolManagerContract.getAllBondingPools(),
        poolManagerContract.getAllFairPools(),
        poolManagerContract.totalParticipants(),
      ]);

      // For demonstration purposes, we'll fetch some additional data about the pools
      // You can expand this based on your needs

      // Get cumulative bonding info
      const bondingInfo = await poolManagerContract.getCumulativeBondingInfo();
      const formattedBondingInfo = bondingInfo.map((info) => ({
        poolAddress: info.poolAddress,
        token: info.token,
        poolState: info.poolState,
        poolType: info.poolType,
        name: info.name,
        symbol: info.symbol,
        tokenPrice: info.tokenPrice.toString(),
        ethAmount: info.ethAmount.toString(),
        tokenAmount: info.tokenAAmount.toString(),
        holders: info._holders.length,
        marketCap: info.markectCap.toString(),
        circulatingSupply: info.circulatingSupply.toString(),
      }));

      // Get fair pool info for first 100 pools
      const fairPoolCount = fairPoolsAddresses.length;
      const fairPoolInfo = await poolManagerContract.getCumulativeFairPoolInfo(
        0,
        fairPoolCount < 100 ? fairPoolCount : 100
      );

      const formattedFairPoolInfo = fairPoolInfo.map((info) => ({
        poolAddress: info.poolAddress,
        token: info.token,
        currency: info.currency,
        poolState: info.poolState,
        poolType: info.poolType,
        startTime: info.startTime.toString(),
        endTime: info.endTime.toString(),
        totalRaised: info.totalRaised.toString(),
        hardCap: info.hardCap.toString(),
        softCap: info.softCap.toString(),
        name: info.name,
        symbol: info.symbol,
      }));

      // Get TVL for ETH (address 0 typically represents ETH)
      const ethTVL = await poolManagerContract.totalValueLocked(
        "0x0000000000000000000000000000000000000000"
      );

      setBondingPools(formattedBondingInfo);
      setFairPools(formattedFairPoolInfo);
      setTotalParticipants(Number(totalParticipantsCount));
      setTotalValueLocked({
        ETH: ethTVL.toString(),
      });
    } catch (error) {
      console.error("Error fetching pool data:", error);
    } finally {
      setIsFetching(false);
    }
  }, [readOnlyProvider, isFetching]);

  useEffect(() => {
    fetchPoolData();
  }, [fetchPoolData]);

  useEffect(() => {
    if (!readOnlyProvider) return;

    const contract = new Contract(
      PHAROS_POOL_MANAGER_ADDRESS,
      POOL_MANAGER_ABI,
      readOnlyProvider
    );

    // Listen for events
    contract.on("ContributionUpdated", (totalParticipations) => {
      console.log("Contribution updated:", totalParticipations);
      setTotalParticipants(Number(totalParticipations));
    });

    contract.on("TvlChanged", (currency, totalLocked, totalRaised) => {
      console.log("TVL changed:", { currency, totalLocked, totalRaised });
      setTotalValueLocked((prev) => ({
        ...prev,
        [currency]: totalLocked.toString(),
      }));
    });

    console.log("Event listeners added");

    return () => {
      contract.removeAllListeners();
      console.log("Event listeners removed");
    };
  }, [readOnlyProvider]);

  // Add functionality to fetch user's contributed pools
  const fetchUserContributedPools = useCallback(
    async (userAddress) => {
      if (!readOnlyProvider || !userAddress) return [];

      const poolManagerContract = new Contract(
        PHAROS_POOL_MANAGER_ADDRESS,
        POOL_MANAGER_ABI,
        readOnlyProvider
      );

      try {
        const contributedPoolsCount =
          await poolManagerContract.getTotalNumberOfContributedPools(
            userAddress
          );
        const contributedPools =
          await poolManagerContract.getAllContributedPools(userAddress);

        // Get detailed info for user's contributed pools (up to first 10)
        const poolCount = Number(contributedPoolsCount);
        if (poolCount > 0) {
          const contributedPoolsInfo =
            await poolManagerContract.getUserContributedPoolInfo(
              userAddress,
              0,
              poolCount < 10 ? poolCount : 10
            );

          return contributedPoolsInfo.map((info) => ({
            poolAddress: info.poolAddress,
            token: info.token,
            currency: info.currency,
            poolState: info.poolState,
            poolType: info.poolType,
            startTime: info.startTime.toString(),
            endTime: info.endTime.toString(),
            totalRaised: info.totalRaised.toString(),
            hardCap: info.hardCap.toString(),
            softCap: info.softCap.toString(),
            name: info.name,
            symbol: info.symbol,
          }));
        }

        return [];
      } catch (error) {
        console.error("Error fetching user contributed pools:", error);
        return [];
      }
    },
    [readOnlyProvider]
  );

  const refreshData = useCallback(() => {
    setIsFetching(true);
  }, []);

  return (
    <BondingPoolContext.Provider
      value={{
        bondingTokenCreated,
        bondingPools,
        fairPools,
        isFetching,
        totalParticipants,
        totalValueLocked,
        fetchUserContributedPools,
        refreshData,
      }}
    >
      {children}
    </BondingPoolContext.Provider>
  );
};

export const useBondingPools = () => {
  const context = useContext(BondingPoolContext);
  if (!context)
    console.error(
      "useBondingPools should be used within BondingPoolContextProvider"
    );
  return context;
};