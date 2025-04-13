import React from "react";
import RootLayout from "./layouts/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Staking from "@/pages/Staking/Staking";

const App = () => {
  return (
    // <Routes>
    //   <Route element={<RootLayout />}>
    //     <Route path="/" element />
    //     <Route path="/staking" element={<Staking />} />
    //   </Route>
    // </Routes>

    <RootLayout>
      <Staking/>
    </RootLayout>
  );
};

export default App;
