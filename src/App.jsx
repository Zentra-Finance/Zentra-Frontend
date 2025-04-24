import React from "react";
import RootLayout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";
import Staking from "@/pages/Staking/Staking";
import CreateToken from "@/pages/Tokens/CreateToken";
import Bounding from "@/pages/Bounding/Index";
import Airdrop from "@/pages/Airdrop/Airdrop";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/staking" element={<Staking />} />
        <Route path="/token" element={<CreateToken />} />
        <Route path="/bonding-token-sale" element={<Bounding />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/fair-launch" element={<Airdrop />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
