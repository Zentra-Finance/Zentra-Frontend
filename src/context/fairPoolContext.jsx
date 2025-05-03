import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { Contract, ethers, formatEther, formatUnits, Interface } from "ethers";
import useEthersProvider from "@/hooks/useEthersProvider";
import { FAIR_POOL_ABI } from "@/utils/ABI/FairPool";

import { useAccount } from "wagmi";
import useFairPoolContract from "@/hooks/useFairPoolContract";
import { useParams } from "react-router-dom";
import axios from "axios";
const BLOCKSCOUT_API = "https://pharosscan.xyz/api";
const multicall3Addr = "0x3308CC3B0b2fCD4E9994E210A8290649d61360D7";
const multicallAbi = [
	"function tryAggregate(bool requireSuccess, (address target, bytes callData)[] calls) returns ((bool success, bytes returnData)[] returnData)",
];
export const FairPoolContext = createContext({
	participants: [],
	token: {},
	loading: true,
	setToken: () => {},
	setParticipants: () => {},
});

export const FairPoolContextProvider = ({ children }) => {
	const { address } = useAccount();
	const { contractAddress } = useParams();

	// const poolFactoryContract = usePoolFactoryContract(true);
	const readOnlyFairPoolContract = useFairPoolContract(false);
	const { readOnlyProvider, signer } = useEthersProvider();
	// const [bondingTokenCreated, setBondingTokenCreated] = useState(false);
	const [participants, setParticipants] = useState([]);
	const [token, setToken] = useState({});
	const [loading, setLoading] = useState(true);

	const contributedHandler = useCallback((contributor, amount, time) => {
		console.log({ contributor, amount, time });
		// if (contributor === address) {
		console.log("Trueeeeeeeeeeeeeeeeeeeeeeeee");

		setParticipants((prevParticipants) => {
			const newParticipants = [
				...prevParticipants,
				{
					id: contributor,
					address: contributor,
					amount: Number(formatEther(amount)).toFixed(3),
					time: new Date(Number(time) * 1000).toISOString(),
				},
			];
		
			const uniqueContributors = getUniqueContributors(newParticipants);
			const totalRaised = newParticipants.reduce(
				(acc, p) => acc + Number(p.amount),
				0
			);
		
			setToken((prev) => ({
				...prev,
				raised: totalRaised.toFixed(3),
				participants: uniqueContributors.length,
			}));
		
			return newParticipants;
		});

	}, []);

	useEffect(() => {
		// // const filter = readOnlyProposalContract.filter.ProposalCreated()
		const contract = new Contract(
			contractAddress,
			FAIR_POOL_ABI,
			// readOnlyProvider
			signer
		);

		contract.on("Contributed", contributedHandler);
		console.log("created listener added");
		return () => {
			contract.off("Contributed", contributedHandler);
			console.log("created listener removed");
		};
	}, [contributedHandler, readOnlyProvider]);

	useEffect(() => {
		async function getLatestBlock() {
			const { data } = await axios.get(BLOCKSCOUT_API, {
				params: {
					module: "block",
					action: "getblocknobytime",
					timestamp: Math.floor(Date.now() / 1000),
					closest: "before",
				},
			});

			// console.log({ data2: data });

			return parseInt(data.result.blockNumber);
		}
		const fetchPoolDetails = async () => {
			const contract = new Contract(
				contractAddress,
				FAIR_POOL_ABI,
				// readOnlyProvider
				signer
			);
			try {
				const latestBlock = await getLatestBlock();
				console.log({ latestBlock });
				const eventSignature = ethers.id(
					"Contributed(address,uint256,uint256)"
				);
				const { data } = await axios.get(BLOCKSCOUT_API, {
					params: {
						module: "logs",
						action: "getLogs",
						fromBlock: 0,
						toBlock: latestBlock,
						address: contractAddress,
						topic0: eventSignature,
					},
				});
				console.log({ data });

				const participants = [];
				// for (const event of events) {
				// 	const { contributor, amount, timestamp } = event.args;
				// 	participants.push({
				// 		id: contributor,
				// 		contributor: contributor, // optional: normalize
				// 		amount,
				// 		timestamp,
				// 	});
				// }
				if (data.status === "1") {
					const iface = new ethers.Interface([
						"event Contributed(address indexed contributor, uint256 amount, uint256 timestamp)",
					]);

					// console.log({ dataResult: data.result });

					const abiCoder = new ethers.AbiCoder();

					for (const log of data.result) {
						// console.log(log.topics);
						// try {
						// decode non-indexed args: amount (uint256), timestamp (uint256)
						const [amount, timestamp] = abiCoder.decode(
							["uint256", "uint256"],
							log.data
						);

						// decode indexed contributor from topics[1]
						const contributor = ethers.getAddress(
							"0x" + log.topics[1].slice(26)
						); // last 40 hex chars
						// console.log({contributor})
						const time = new Date(Number(timestamp) * 1000).toISOString();

						participants.push({
							id: contributor,
							address: contributor,
							amount: Number(formatEther(amount)).toFixed(3),
							time,
						});
						// } catch (err) {
						// 	console.error("Manual decode failed:", err);
						// }
					}
				}
				// console.log({ participants });
				setParticipants(participants);

				// setEventData({ contributors, amounts, timestamps });
				// console.log("Fetched contributed events:", {
				// 	participants,
				// });
				// 	} catch (err) {
				// 		console.error("Error fetching contributed events:", err);
				// 	}
				// };

				const multicallContract = new Contract(
					multicall3Addr,
					multicallAbi,
					readOnlyProvider
				);

				// uint256 public refundType;
				// uint256 public totalToken;
				// uint256 public liquidityLockDays
				const fairPoolItf = new Interface(FAIR_POOL_ABI);

				const allFairPools = [
					{ address: contractAddress, method: "refundType" },
					{ address: contractAddress, method: "totalToken" },
					{ address: contractAddress, method: "liquidityLockDays" },
				];
				const fairPoolItfCalls = allFairPools.map((fairPool) => ({
					target: fairPool.address,
					callData: fairPoolItf.encodeFunctionData(fairPool.method),
				}));
				const allFairPoolsResponses =
					await multicallContract.tryAggregate.staticCall(
						true,
						fairPoolItfCalls
					);

				const deCodedRefundType = fairPoolItf.decodeFunctionResult(
					"refundType",
					allFairPoolsResponses[0].returnData
				);
				const deCodedTotalToken = fairPoolItf.decodeFunctionResult(
					"totalToken",
					allFairPoolsResponses[1].returnData
				);
				const deCodedLiquidityLockDays = fairPoolItf.decodeFunctionResult(
					"liquidityLockDays",
					allFairPoolsResponses[2].returnData
				);

				// console.log({
				// 	deCodedRefundType,
				// 	deCodedTotalToken,
				// 	deCodedLiquidityLockDays,
				// });

				// const fetchPoolDetails = async () => {
				const uniqueContributors = getUniqueContributors(participants);
				// try {
				console.log("Running.....");
				const poolInfo = await readOnlyFairPoolContract.getPoolInfo();
				// console.log({ poolInfo });
				const startTimestamp = poolInfo[3][0];
				const endTimestamp = poolInfo[3][1];
				const totalRaised = poolInfo[3][2];
				// const kycStatus = poolInfo[3][3];
				const softCap = poolInfo[3][4];
				const poolState = poolInfo[2][0];
				// console.log({ poolState });

				const date = new Date(Number(startTimestamp) * 1000);
				const endDate = new Date(Number(endTimestamp) * 1000);

				// Format to "YY-MM-DD HH:mm"
				const startTime = date
					.toISOString()
					.slice(2, 16)
					.replace("T", " ")
					.replace(/-/g, "-");

				const startTimeRaw = date.toISOString().slice(0, 16); // "2025-05-02T16:04"
				const endTimeRaw = endDate.toISOString().slice(0, 16); // "2025-05-02T16:04"
				const now = Math.floor(Date.now() / 1000); // current time in seconds
				const timestampInSeconds = parseInt(deCodedLiquidityLockDays); // or parseInt(block.timestamp)
				// console.log({ timestampInSeconds: poolInfo[3][10] });
				const daysSinceEpoch = Math.floor(timestampInSeconds / (60 * 60 * 24));
				const status =
					Number(totalRaised) >= Number(softCap)
						? "COMPLETED"
						: now < Number(startTimestamp)
						? "UPCOMING"
						: now < Number(endTimestamp)
						? "LIVE"
						: "ENDED";
				// const totalRaised = Number(poolInfo[3][2])
				const fullTokenSaleDetails = {
					id: contractAddress,
					name: poolInfo[4],
					symbol: poolInfo[5],
					decimals: Number(poolInfo[2][2]),
					icon: "/vite.svg",
					bannerImage: "/Pharos-chain.jpg",
					address: contractAddress,
					contractAddress: poolInfo[0],
					supply: Number(
						formatUnits(deCodedTotalToken.toString(), Number(poolInfo[2][2]))
					).toLocaleString(),
					rate: Number(poolInfo[3][7]),
					softcap: formatEther(softCap.toString()),
					// softcap: Number(softCap),
					hardcap: formatEther(softCap.toString()),
					minContribution: "0.01 PTT",
					maxContribution: "1 PTT",
					unsold: Number(deCodedRefundType) === 0 ? "Refund" : "Burn",
					startTimeRaw: startTimeRaw,
					endTimeRaw: endTimeRaw,
					listing:
						Number(poolInfo[7]) === 2 ? "Zentraswap V2" : "Zentraswap V3",
					liquidity: `${Number(poolInfo[3][9])}%`,
					lpUnlock: `${Number(daysSinceEpoch)} days`,
					brief:
						"Zentra is a next-generation decentralized finance platform that combines yield farming, staking, and NFT marketplace in one ecosystem. Our mission is to provide a seamless DeFi experience with enhanced security and user-friendly interfaces.",
					progress: (Number(totalRaised) / Number(softCap)) * 100,
					raised: formatEther(Number(poolInfo[3][2]).toString()),
					participants: uniqueContributors.length,
					status: status,
					socialLinks: {
						website: "https://example.com",
						twitter: "https://twitter.com",
						telegram: "https://telegram.org",
						discord: "https://discord.com",
						github: "https://github.com",
					},
				};
				// console.log({ fullTokenSaleDetails });
				setToken(fullTokenSaleDetails);
			} catch (error) {
				console.log({ error });
			} finally {
				setLoading(false);
			}
		};
		// fetchEvents();
		console.log("UseEffect running....");
		fetchPoolDetails();
	}, [readOnlyProvider, contractAddress]);

	// console.log("Loading");
	function getUniqueContributors(participants) {
		return [
			...new Set(
				participants.map((participant) => participant.id.toLowerCase())
			),
		];
	}

	console.log({ token });
	return (
		<FairPoolContext.Provider
			value={{
				token,
				participants,
				loading,
				setToken,
				setParticipants,
			}}
		>
			{children}
		</FairPoolContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFairPools = () => {
	const context = useContext(FairPoolContext);
	if (!context)
		return console.error(
			"useFairPools should be used within FairPoolContextProvider"
		);
	return context;
};
