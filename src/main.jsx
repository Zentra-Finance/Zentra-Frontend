import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { celoAlfajores } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { defineChain } from "viem";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const REOWN_CLOUD_APP_ID = import.meta.env.VITE_REOWN_CLOUD_APP_ID || "";

const pharosDevnet = defineChain({
  id: 50002,
  caipNetworkId: "eip155:50002",
  chainNamespace: "eip155",
  name: "Pharos Devnet",
  iconUrl: "/Pharos-chain.jpg",
  nativeCurrency: {
    decimals: 18,
    name: "Pharos",
    symbol: "PPT",
  },
  rpcUrls: {
    default: {
      http: ["https://devnet.dplabs-internal.com"],
      webSocket: ["wss://devnet.dplabs-internal.com"],
    },
  },
  blockExplorers: {
    default: { name: "Pharos Explorers", url: "https://pharosscan.xyz" },
  },
});
if (!REOWN_CLOUD_APP_ID);

const config = getDefaultConfig({
  appName: "Zentra",
  projectId: REOWN_CLOUD_APP_ID,
  chains: [pharosDevnet, celoAlfajores],
  ssr: true,
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            initialChain={pharosDevnet?.id}
            coolMode
            showRecentTransactions={true}
            modalSize="compact"
            theme={darkTheme({
              accentColor: "#97CBDC/30",
              accentColorForeground: "white",
              fontStack: "system",
            })}
          >
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </BrowserRouter>
  </StrictMode>
);
