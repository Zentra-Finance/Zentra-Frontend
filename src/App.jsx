import React from "react";
import RootLayout from "@/layouts/Layout";
import { Routes, Route } from "react-router-dom";
import Staking from "@/pages/Staking/Staking";
import CreateToken from "@/pages/Tokens/CreateToken";
import Bounding from "@/pages/Bounding/Index";
import Airdrop from "@/pages/Airdrop/Airdrop";
import TokenLockPage from "@/pages/Lock/Index";
import LPLockListPage from "@/pages/Lock/LP/Index";
import TokenLock from "@/pages/Lock/TOKEN";
import FairLaunchPage from "@/pages/FairLaunch/FairLaunch";
import Launchpad from "@/pages/Launchpad";
import FairLaunchViewPage from "@/pages/FairLaunch/FairLanchView";
import BoundingTrading from "./pages/Bounding/BoundingTrading";
import { BondingPoolContextProvider } from "./context/bondingPoolContext";
import { LaunchPadContextProvider } from "./context/launchPadContext";
import { FairPoolContextProvider } from "./context/fairPoolContext";

const App = () => {
	return (
		<RootLayout>
			<Routes>
				<Route
					path="/"
					element={
						<LaunchPadContextProvider>
							<Launchpad />
						</LaunchPadContextProvider>
					}
				/>
				<Route path="/staking" element={<Staking />} />
				<Route path="/token" element={<CreateToken />} />
				<Route
					path="/bonding-token-sale"
					element={
						<BondingPoolContextProvider>
							<Bounding />
						</BondingPoolContextProvider>
					}
				/>
				<Route
					path="/bonding-details/:boundingAddress"
					element={<BoundingTrading />}
				/>
				<Route path="/airdrop" element={<Airdrop />} />
				<Route path="/fair-launch" element={<FairLaunchPage />} />
				<Route
					path="/fairlaunch-details/:contractAddress"
					element={
						<FairPoolContextProvider>
							<FairLaunchViewPage />
						</FairPoolContextProvider>
					}
				/>
				<Route path="/lock" element={<TokenLockPage />} />
				<Route path="/token-lock" element={<TokenLock />} />
				<Route path="/lp-lock" element={<LPLockListPage />} />
			</Routes>
		</RootLayout>
	);
};

export default App;
