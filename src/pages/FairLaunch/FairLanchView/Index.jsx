"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Copy,
  ExternalLink,
  Users,
  ArrowUpRight,
  Info,
  Shield,
  Percent,
  DollarSign,
  Link,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FairLaunchEditModal } from "./components/FairLaunchEditModal";
import { useParams } from "react-router-dom";

export default function FairLaunchViewPage({ params }) {
  const {contractAddress} = useParams()
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [contributionAmount, setContributionAmount] = useState("0");
  const [copied, setCopied] = useState({ address: false, contract: false });
  const [activeTab, setActiveTab] = useState("overview");
  const [participants, setParticipants] = useState([]);

  // Fetch token data
  useEffect(() => {
    // Simulate fetching token data
    setTimeout(() => {
      setToken({
        id: contractAddress.id,
        name: "Zentra",
        symbol: "ZTR",
        decimals: "18",
        icon: "/vite.svg",
        bannerImage: "/Pharos-chain.jpg",
        address: "0x24b10ecdb3646ca4659155bfaa43d7943c278e93",
        contractAddress: "0xc1a06eda5c6c7fc99de1a2bee611ae06a35312f4",
        supply: "899,889,090,909",
        rate: "1 ETH = 1,000,000 ZTR",
        softcap: "0.5 ETH",
        hardcap: "5 ETH",
        minContribution: "0.01 ETH",
        maxContribution: "1 ETH",
        unsold: "Refund",
        startTimeRaw: "2025-05-02T16:04:00",
        endTimeRaw: "2025-05-03T16:04:00",
        listing: "Uniswap V3",
        liquidity: "55%",
        lpUnlock: "365 days",
        brief:
          "Zentra is a next-generation decentralized finance platform that combines yield farming, staking, and NFT marketplace in one ecosystem. Our mission is to provide a seamless DeFi experience with enhanced security and user-friendly interfaces.",
        progress: 35,
        raised: "1.75",
        participants: 42,
        status: "LIVE",
        socialLinks: {
          website: "https://example.com",
          twitter: "https://twitter.com",
          telegram: "https://telegram.org",
          discord: "https://discord.com",
          github: "https://github.com",
        },
      });

      // Generate mock participants
      const mockParticipants = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        address: `0x${Math.random()
          .toString(16)
          .substring(2, 10)}...${Math.random().toString(16).substring(2, 10)}`,
        amount: (Math.random() * 0.5 + 0.01).toFixed(3),
        time: new Date(Date.now() - Math.random() * 86400000 * 3).toISOString(),
      }));

      setParticipants(mockParticipants);
      setLoading(false);
    }, 1000);
  }, [contractAddress]);

  // Calculate time left
  const calculateTimeLeft = useCallback(() => {
    if (!token) return;

    const startDate = new Date(token.startTimeRaw);
    const endDate = new Date(token.endTimeRaw);
    const now = new Date();

    // If we're before the start date, countdown to start
    // If we're between start and end, countdown to end
    // If we're after end, show zeros

    let targetDate;
    if (now < startDate) {
      targetDate = startDate;
    } else if (now < endDate) {
      targetDate = endDate;
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const difference = targetDate - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(timer);
    }
  }, [token, calculateTimeLeft]);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [type]: true });
    setTimeout(() => {
      setCopied({ ...copied, [type]: false });
    }, 2000);
  };

  const handleMaxContribution = () => {
    if (token) {
      setContributionAmount(
        token.maxContribution?.replace(" ETH", "") || "1.0"
      );
    }
  };

  const handleEditSubmit = (data) => {
    console.log("Token updated:", data);
    // Here you would typically send the data to your API/contract
    // For now, we'll update the local state to simulate the change
    setToken((prev) => ({
      ...prev,
      ...data,
      startTimeRaw: data.startTime.toISOString(),
      endTimeRaw: data.endTime.toISOString(),
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-[#018ABD] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#97CBDC]">Loading token details...</p>
        </div>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Token Not Found
          </h2>
          <p className="text-[#97CBDC]">
            The token you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  const getStatusColor = () => {
    switch (token.status) {
      case "LIVE":
        return "bg-gradient-to-r from-green-500 to-green-400 text-green-100";
      case "UPCOMING":
        return "bg-gradient-to-r from-blue-500 to-blue-400 text-blue-100";
      case "COMPLETED":
        return "bg-gradient-to-r from-purple-500 to-purple-400 text-purple-100";
      case "BONDING":
        return "bg-gradient-to-r from-purple-600 to-purple-500 text-purple-100";
      case "ENDED":
        return "bg-gradient-to-r from-gray-500 to-gray-400 text-gray-100";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-400 text-gray-100";
    }
  };

  return (
    <div className="min-h-screen  text-white">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img
          src={token.bannerImage || "/Pharos-chain.jpg"}
          alt={token.name}
          fill
          className="object-cover w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0f1a]"></div>

        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="container mx-auto flex flex-col md:flex-row items-end md:items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden border-2 border-[#475B74] shadow-lg"
              >
                <img
                  src={token?.icon || "/Pharos-chain.jpg"}
                  alt={token.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </motion.div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    className={`${getStatusColor()} text-xs font-medium px-3 py-1 rounded-full shadow-lg`}
                  >
                    {token.status === "LIVE" && (
                      <span className="w-2 h-2 rounded-full bg-white mr-1.5 animate-pulse"></span>
                    )}
                    {token.status}
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold text-white">
                  {token.name}{" "}
                  <span className="text-[#97CBDC]">({token.symbol})</span>
                </h1>
              </div>
            </div>

            <div className="flex gap-3 mt-4 md:mt-0">
              <FairLaunchEditModal token={token} onSubmit={handleEditSubmit} />

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-gradient-to-r cursor-pointer from-[#004581] to-[#018ABD] hover:from-[#003b6e] hover:to-[#0179a3] text-white rounded-xl h-12 shadow-lg shadow-[#004581]/20 transition-all duration-200 font-medium">
                  View on Explorer
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left and Center */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs Navigation */}
            <Tabs
              defaultValue="overview"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="bg-[#1D2538]/80 border border-[#475B74] p-1 rounded-xl w-full grid grid-cols-3">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#004581] data-[state=active]:to-[#018ABD] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#004581]/20 rounded-lg text-[#97CBDC] hover:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="participants"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#004581] data-[state=active]:to-[#018ABD] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#004581]/20 rounded-lg text-[#97CBDC] hover:text-white"
                >
                  Participants
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#004581] data-[state=active]:to-[#018ABD] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#004581]/20 rounded-lg text-[#97CBDC] hover:text-white"
                >
                  Details
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-6 space-y-6">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-b from-[#1D2538]/90 to-[#1D2538] rounded-3xl overflow-hidden border border-[#475B74]/50 shadow-xl backdrop-blur-sm p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-4">
                    About {token.name}
                  </h2>
                  <p className="text-[#97CBDC] leading-relaxed">
                    {token.brief}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {token.socialLinks &&
                      Object.entries(token.socialLinks).map(([key, url]) => (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#1D2538]/60 hover:bg-[#004581]/20 text-[#97CBDC] hover:text-white px-4 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors"
                        >
                          <Link className="h-4 w-4" />
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </a>
                      ))}
                  </div>
                </motion.div>

                {/* Token Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gradient-to-b from-[#1D2538]/90 to-[#1D2538] rounded-3xl overflow-hidden border border-[#475B74]/50 shadow-xl backdrop-blur-sm p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-4">
                    Token Metrics
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-[#475B74]/30">
                        <span className="text-[#97CBDC]">Token Name</span>
                        <span className="text-white font-medium">
                          {token.name}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-[#475B74]/30">
                        <span className="text-[#97CBDC]">Token Symbol</span>
                        <span className="text-white font-medium">
                          {token.symbol}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-[#475B74]/30">
                        <span className="text-[#97CBDC]">Decimals</span>
                        <span className="text-white font-medium">
                          {token.decimals}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-[#475B74]/30">
                        <span className="text-[#97CBDC]">Total Supply</span>
                        <span className="text-white font-medium">
                          {token.supply}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-[#475B74]/30">
                        <span className="text-[#97CBDC]">Sale Rate</span>
                        <span className="text-white font-medium">
                          {token.rate}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-[#475B74]/30">
                        <span className="text-[#97CBDC]">Softcap</span>
                        <span className="text-white font-medium">
                          {token.softcap}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-[#475B74]/30">
                        <span className="text-[#97CBDC]">Hardcap</span>
                        <span className="text-white font-medium">
                          {token.hardcap}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-[#475B74]/30">
                        <span className="text-[#97CBDC]">Unsold Tokens</span>
                        <span className="text-white font-medium">
                          {token.unsold}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-b from-[#1D2538]/90 to-[#1D2538] rounded-3xl overflow-hidden border border-[#475B74]/50 shadow-xl backdrop-blur-sm p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-4">
                    Timeline
                  </h2>

                  <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#004581] before:to-[#018ABD]">
                    <div className="relative">
                      <div className="absolute left-[-29px] top-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#004581] to-[#018ABD] flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <h3 className="text-lg font-medium text-white">
                        Sale Starts
                      </h3>
                      <p className="text-[#97CBDC]">
                        {formatDate(token.startTimeRaw)}
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute left-[-29px] top-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#004581] to-[#018ABD] flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <h3 className="text-lg font-medium text-white">
                        Sale Ends
                      </h3>
                      <p className="text-[#97CBDC]">
                        {formatDate(token.endTimeRaw)}
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute left-[-29px] top-0 h-6 w-6 rounded-full bg-[#1D2538] border-2 border-[#475B74] flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#97CBDC]"></div>
                      </div>
                      <h3 className="text-lg font-medium text-white">
                        Token Claim
                      </h3>
                      <p className="text-[#97CBDC]">After sale ends</p>
                    </div>

                    <div className="relative">
                      <div className="absolute left-[-29px] top-0 h-6 w-6 rounded-full bg-[#1D2538] border-2 border-[#475B74] flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#97CBDC]"></div>
                      </div>
                      <h3 className="text-lg font-medium text-white">
                        Listing on {token.listing}
                      </h3>
                      <p className="text-[#97CBDC]">After token claim</p>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Participants Tab */}
              <TabsContent value="participants" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-b from-[#1D2538]/90 to-[#1D2538] rounded-3xl overflow-hidden border border-[#475B74]/50 shadow-xl backdrop-blur-sm p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-4">
                    Recent Participants
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#475B74]/30">
                          <th className="text-left py-3 px-4 text-[#97CBDC] font-medium">
                            Address
                          </th>
                          <th className="text-right py-3 px-4 text-[#97CBDC] font-medium">
                            Amount
                          </th>
                          <th className="text-right py-3 px-4 text-[#97CBDC] font-medium">
                            Time
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {participants.map((participant) => (
                          <tr
                            key={participant.id}
                            className="border-b border-[#475B74]/10 hover:bg-[#1D2538]/60"
                          >
                            <td className="py-3 px-4 text-[#018ABD]">
                              {participant.address}
                            </td>
                            <td className="py-3 px-4 text-white text-right">
                              {participant.amount} ETH
                            </td>
                            <td className="py-3 px-4 text-[#97CBDC] text-right">
                              {formatDate(participant.time)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {participants.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-[#97CBDC]">No participants yet</p>
                    </div>
                  )}
                </motion.div>
              </TabsContent>

              {/* Details Tab */}
              <TabsContent value="details" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-b from-[#1D2538]/90 to-[#1D2538] rounded-3xl overflow-hidden border border-[#475B74]/50 shadow-xl backdrop-blur-sm p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-4">
                    Contract Details
                  </h2>

                  <div className="space-y-4">
                    <div className="bg-[#1D2538]/60 rounded-xl p-4 border border-[#475B74]/50">
                      <div className="flex justify-between items-center">
                        <span className="text-[#97CBDC]">Token Address</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium truncate max-w-[200px] md:max-w-[300px]">
                            {token.contractAddress}
                          </span>
                          <button
                            onClick={() =>
                              handleCopy(token.contractAddress, "contract")
                            }
                            className="text-[#97CBDC] hover:text-white transition-colors"
                          >
                            {copied.contract ? (
                              <span className="text-green-400 text-xs">
                                Copied!
                              </span>
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#1D2538]/60 rounded-xl p-4 border border-[#475B74]/50">
                      <div className="flex justify-between items-center">
                        <span className="text-[#97CBDC]">Sale Address</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium truncate max-w-[200px] md:max-w-[300px]">
                            {token.address}
                          </span>
                          <button
                            onClick={() => handleCopy(token.address, "address")}
                            className="text-[#97CBDC] hover:text-white transition-colors"
                          >
                            {copied.address ? (
                              <span className="text-green-400 text-xs">
                                Copied!
                              </span>
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mt-8 mb-4">
                    Liquidity Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#1D2538]/60 rounded-xl p-4 border border-[#475B74]/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Percent className="h-4 w-4 text-[#018ABD]" />
                        <span className="text-[#97CBDC]">
                          Liquidity Percentage
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-white">
                        {token.liquidity}
                      </p>
                    </div>

                    <div className="bg-[#1D2538]/60 rounded-xl p-4 border border-[#475B74]/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-[#018ABD]" />
                        <span className="text-[#97CBDC]">LP Lock Duration</span>
                      </div>
                      <p className="text-lg font-semibold text-white">
                        {token.lpUnlock}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Countdown and Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-[#1D2538]/90 to-[#1D2538] rounded-3xl overflow-hidden border border-[#475B74]/50 shadow-xl backdrop-blur-sm p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4">
                {new Date() < new Date(token.startTimeRaw)
                  ? "Sale Starts In"
                  : "Sale Ends In"}
              </h2>

              <div className="grid grid-cols-4 gap-2 mb-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#0d1424] rounded-xl p-3 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {timeLeft.days.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-[#97CBDC]">Days</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#0d1424] rounded-xl p-3 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-[#97CBDC]">Hours</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#0d1424] rounded-xl p-3 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-[#97CBDC]">Mins</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#0d1424] rounded-xl p-3 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-[#97CBDC]">Secs</div>
                </motion.div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-[#97CBDC]">Progress</span>
                  <span className="text-white font-medium">
                    {token.progress}%
                  </span>
                </div>
                <Progress
                  value={token.progress}
                  className="h-2 bg-[#1D2538]"
                  indicatorClassName="bg-gradient-to-r from-[#004581] to-[#018ABD]"
                />
              </div>

              <div className="flex justify-between mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-[#97CBDC]">Raised:</span>
                  <span className="text-white font-medium">
                    {token.raised} ETH
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#97CBDC]">Goal:</span>
                  <span className="text-white font-medium">
                    {token.hardcap}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1D2538]/60 rounded-xl p-3 border border-[#475B74]/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="h-4 w-4 text-[#018ABD]" />
                    <span className="text-xs text-[#97CBDC]">Participants</span>
                  </div>
                  <p className="text-lg font-semibold text-white">
                    {token.participants}
                  </p>
                </div>

                <div className="bg-[#1D2538]/60 rounded-xl p-3 border border-[#475B74]/50">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="h-4 w-4 text-[#018ABD]" />
                    <span className="text-xs text-[#97CBDC]">Token Price</span>
                  </div>
                  <p className="text-sm font-semibold text-white truncate">
                    {token.rate.split(" = ")[1]}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#97CBDC]">Min Contribution</span>
                    <span className="text-white">{token.minContribution}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#97CBDC]">Max Contribution</span>
                    <span className="text-white">{token.maxContribution}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contribute Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-b from-[#1D2538]/90 to-[#1D2538] rounded-3xl overflow-hidden border border-[#475B74]/50 shadow-xl backdrop-blur-sm p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4">Contribute</h2>

              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="number"
                    value={contributionAmount}
                    onChange={(e) => setContributionAmount(e.target.value)}
                    className="bg-[#1D2538]/60 border-[#475B74] text-white h-12 rounded-xl focus:border-[#018ABD] focus:ring-1 focus:ring-[#018ABD] pr-20"
                    placeholder="0"
                  />
                  <div className="absolute right-1 top-1 flex items-center">
                    <span className="text-[#97CBDC] mr-2">ETH</span>
                    <Button
                      onClick={handleMaxContribution}
                      className="bg-gradient-to-r from-[#004581] to-[#018ABD] hover:from-[#003b6e] hover:to-[#0179a3] text-white h-10 rounded-lg"
                    >
                      Max
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-[#97CBDC]">You will receive:</span>
                  <span className="text-white">
                    {contributionAmount &&
                    !isNaN(Number.parseFloat(contributionAmount))
                      ? (
                          Number.parseFloat(contributionAmount) * 1000000
                        ).toLocaleString()
                      : 0}{" "}
                    {token.symbol}
                  </span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button className="w-full bg-gradient-to-r from-[#004581] to-[#018ABD] hover:from-[#003b6e] hover:to-[#0179a3] text-white rounded-xl h-12 shadow-lg shadow-[#004581]/20 transition-all duration-200 font-medium group">
                    <span>CONTRIBUTE NOW</span>
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </motion.div>

                <div className="flex justify-between pt-4">
                  <div className="text-[#97CBDC]">My Contribution</div>
                  <div className="text-white">0 ETH</div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-gradient-to-r from-[#004581] to-[#018ABD] hover:from-[#003b6e] hover:to-[#0179a3] text-white rounded-xl h-12 shadow-lg shadow-[#004581]/20 transition-all duration-200 font-medium flex items-center justify-center gap-2">
                        <Info className="h-4 w-4" />
                        View Audit Report
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View the security audit report</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-gradient-to-r from-[#004581] to-[#018ABD] hover:from-[#003b6e] hover:to-[#0179a3] text-white rounded-xl h-12 shadow-lg shadow-[#004581]/20 transition-all duration-200 font-medium flex items-center justify-center gap-2">
                        <Shield className="h-4 w-4" />
                        KYC Verification
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View KYC verification details</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
