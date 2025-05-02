"use client";

import { useState, useEffect } from "react";
import { BoundingTradingChart } from "../components/BoundingChart";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Info, Share, ShareIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom"; 
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BoundingChartPage() {
  const {boundingAddress} = useParams()
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  // Fetch token data
  useEffect(() => {
    const fetchToken = async () => {
      try {
        // This would be replaced with your actual contract call or API fetch
        // For example:
        // const web3 = new Web3(window.ethereum);
        // const contract = new web3.eth.Contract(ABI, contractAddress);
        // const tokenData = await contract.methods.getTokenInfo(boundingAddress).call();

        // For now, we'll simulate the data
        setTimeout(() => {
          setToken({
            address: boundingAddress,
            name: "Zentra",
            symbol: "ZTR",
            decimals: 18,
            totalSupply: "899,889,090,909",
            pairAddress: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
            price: 0.0000024,
            marketCap: 2386.47,
            holders: 1,
            transactions: 42,
            progress: 0.03,
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching token data:", error);
        setLoading(false);
      }
    };

    fetchToken();
  }, [boundingAddress]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Here you would save to localStorage or your backend
  };

  // Fixed share function to avoid the error
  const shareChart = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-[#018ABD] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#97CBDC]">Loading chart data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <Link to="/" className="cursor-pointer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-[#1D2538]/60 hover:bg-[#1D2538]"
              >
                <ArrowLeft className="h-5 cursor-pointer w-5 text-[#97CBDC]" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                {token?.name}{" "}
                <span className="text-[#97CBDC]">({token?.symbol})</span>
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#97CBDC] text-sm">
                  {boundingAddress.substring(0, 6)}...
                  {boundingAddress.substring(
                    boundingAddress.length - 4
                  )}
                </span>
                <button className="text-[#018ABD] hover:text-[#004581] text-sm flex items-center">
                  <Info className="h-3 w-3 mr-1" />
                  View on Explorer
                </button>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full h-10 w-10",
                isFavorite
                  ? "bg-[#018ABD]/20 text-[#018ABD] hover:bg-[#018ABD]/30"
                  : "bg-[#1D2538]/60 text-[#97CBDC] hover:bg-[#1D2538]"
              )}
              onClick={toggleFavorite}
            >
              <ShareIcon className={cn("h-5 w-5", isFavorite && "fill-[#018ABD]")} />
            </Button>
          </div> */}
        </motion.div>

        {/* Token Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-gradient-to-r from-[#1D2538]/90 to-[#1D2538] rounded-2xl overflow-hidden border border-[#475B74]/50 shadow-xl backdrop-blur-sm p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-[#1D2538]/60 rounded-full flex items-center justify-center border border-[#475B74]/50">
                <span className="text-lg font-bold text-[#018ABD]">
                  {token?.symbol}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  {token?.name}{" "}
                  <span className="text-[#97CBDC]">({token?.symbol})</span>
                </h2>
                <div className="text-[#97CBDC] text-sm">
                  Checking the description...{" "}
                  <span className="text-[#018ABD]">see more</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 w-full md:w-auto">
              <div className="flex flex-col">
                <span className="text-[#97CBDC] text-sm mb-1">Progress</span>
                <div className="relative h-2 w-full bg-[#1D2538] rounded-full overflow-hidden mb-1">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#004581] to-[#018ABD] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.max(token?.progress, 0.5)}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  ></motion.div>
                </div>
                <span className="text-[#4ade80] font-medium">
                  {token?.progress}%
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#97CBDC] text-sm mb-1">Market Cap</span>
                <span className="text-white font-medium">
                  ${token?.marketCap.toLocaleString()}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#97CBDC] text-sm mb-1">Holders</span>
                <span className="text-white font-medium">{token?.holders}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chart with Trading Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <BoundingTradingChart
            tokenAddress={boundingAddress}
            pairAddress={token?.pairAddress}
          />
        </motion.div>
      </div>
    </div>
  );
}
