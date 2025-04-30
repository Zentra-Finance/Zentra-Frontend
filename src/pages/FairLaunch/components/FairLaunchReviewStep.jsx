"use client";

import { useState } from "react";
import {
  Loader2,
  AlertCircle,
  Twitter,
  MessageCircle,
  MessageSquare,
  Github,
  Rocket,
} from "lucide-react";
import { toast } from "react-toastify";
import { useLaunch } from "@/providers/FairLaunchProvider";

export default function FairLaunchReviewStep() {
  const { formData, isSubmitting, setIsSubmitting, setIsSuccess } = useLaunch();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      // Simulate API call to create token launch
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real implementation, you would call your contract here
      // const contract = new ethers.Contract(FACTORY_ADDRESS, FACTORY_ABI, signer)
      // const tx = await contract.createLaunch(formData)
      // await tx.wait()

      setIsSuccess(true);
      toast.success("Launch created successfully!");
    } catch (error) {
      console.error("Error submitting launch:", error);
      setError(
        "Failed to create launch. Please check your inputs and try again."
      );
      toast.error("Failed to create launch. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-[#97CBDC] mb-3">
              Token Information
            </h3>
            <div className="bg-[#0a0a20]/80 rounded-xl border border-[#475B74]/50 overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-[#475B74]/30 border-b border-[#475B74]/30">
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">Name</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.tokenName}
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">Symbol</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.tokenSymbol}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#475B74]/30 border-b border-[#475B74]/30">
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">Decimals</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.tokenDecimals}
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">Total Supply</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.tokenSupply}
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-xs text-[#97CBDC]/50">Token Address</div>
                <div className="font-medium text-[#97CBDC] text-sm truncate">
                  {formData.tokenAddress}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[#97CBDC] mb-3">
              Launch Configuration
            </h3>
            <div className="bg-[#0a0a20]/80 rounded-xl border border-[#475B74]/50 overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-[#475B74]/30 border-b border-[#475B74]/30">
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">Launch Type</div>
                  <div className="font-medium text-[#97CBDC] capitalize">
                    {formData.launchType} Launch
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">DEX</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.dex}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#475B74]/30 border-b border-[#475B74]/30">
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">Sale Amount</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.totalSaleAmount} {formData.tokenSymbol}
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">Currency</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.currency}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#475B74]/30 border-b border-[#475B74]/30">
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">Softcap</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.softcap} {formData.currency}
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">Liquidity</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.liquidityPercentage}%
                  </div>
                </div>
              </div>
              {formData.launchType === "presale" && (
                <div className="grid grid-cols-2 divide-x divide-[#475B74]/30 border-b border-[#475B74]/30">
                  <div className="p-3">
                    <div className="text-xs text-[#97CBDC]/50">Hardcap</div>
                    <div className="font-medium text-[#97CBDC]">
                      {formData.hardcap} {formData.currency}
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs text-[#97CBDC]/50">
                      Unsold Tokens
                    </div>
                    <div className="font-medium text-[#97CBDC]">
                      {formData.refundType}
                    </div>
                  </div>
                </div>
              )}
              {formData.enableVesting && (
                <div className="p-3 border-b border-[#475B74]/30">
                  <div className="text-xs text-[#97CBDC]/50">Vesting</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.vestingFirstRelease}% at TGE, then{" "}
                    {formData.vestingRelease}% every {formData.vestingPeriod}{" "}
                    days
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-[#97CBDC] mb-3">
              Schedule
            </h3>
            <div className="bg-[#0a0a20]/80 rounded-xl border border-[#475B74]/50 overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-[#475B74]/30 border-b border-[#475B74]/30">
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">Start Time</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.startTime
                      ? new Date(formData.startTime).toLocaleString()
                      : "Not set"}
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">End Time</div>
                  <div className="font-medium text-[#97CBDC]">
                    {formData.endTime
                      ? new Date(formData.endTime).toLocaleString()
                      : "Not set"}
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-xs text-[#97CBDC]/50">Liquidity Lock</div>
                <div className="font-medium text-[#97CBDC]">
                  {formData.liquidityLockDuration} days
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[#97CBDC] mb-3">
              Project Information
            </h3>
            <div className="bg-[#0a0a20]/80 rounded-xl border border-[#475B74]/50 overflow-hidden">
              <div className="p-3 border-b border-[#475B74]/30">
                <div className="text-xs text-[#97CBDC]/50">Website</div>
                <div className="font-medium text-[#97CBDC]">
                  {formData.website}
                </div>
              </div>
              <div className="p-3 border-b border-[#475B74]/30">
                <div className="text-xs text-[#97CBDC]/50">Social Media</div>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {formData.socials.twitter && (
                    <div className="flex items-center gap-1 text-sm text-[#97CBDC]">
                      <Twitter className="h-3.5 w-3.5 text-[#97CBDC]/70" />
                      <span className="truncate">Twitter</span>
                    </div>
                  )}
                  {formData.socials.telegram && (
                    <div className="flex items-center gap-1 text-sm text-[#97CBDC]">
                      <MessageCircle className="h-3.5 w-3.5 text-[#97CBDC]/70" />
                      <span className="truncate">Telegram</span>
                    </div>
                  )}
                  {formData.socials.discord && (
                    <div className="flex items-center gap-1 text-sm text-[#97CBDC]">
                      <MessageSquare className="h-3.5 w-3.5 text-[#97CBDC]/70" />
                      <span className="truncate">Discord</span>
                    </div>
                  )}
                  {formData.socials.github && (
                    <div className="flex items-center gap-1 text-sm text-[#97CBDC]">
                      <Github className="h-3.5 w-3.5 text-[#97CBDC]/70" />
                      <span className="truncate">GitHub</span>
                    </div>
                  )}
                </div>
              </div>
              {formData.description && (
                <div className="p-3">
                  <div className="text-xs text-[#97CBDC]/50">Description</div>
                  <div className="text-sm mt-1 text-[#97CBDC]">
                    {formData.description}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-[#0a0a20]/60 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
          <div>
            <h3 className="font-medium text-red-400">Error</h3>
            <p className="text-sm text-red-300">{error}</p>
          </div>
        </div>
      )}

      <div className="flex justify-center pt-4">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#004581] to-[#018ABD] text-white hover:from-[#003b6e] hover:to-[#0179a3] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[180px] justify-center shadow-lg shadow-[#004581]/20"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Creating Launch...</span>
            </>
          ) : (
            <>
              <Rocket className="h-4 w-4" />
              <span>Create Token Launch</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
