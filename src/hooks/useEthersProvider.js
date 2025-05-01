import { getEthersSigner } from "@/providers/ethers";
import { config } from "@/providers/Wagmi";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const useEthersProvider = () => {
	const [signer, setSigner] = useState(null);
    const {address} = useAccount()

	// const provider = getEthersSigner(config);
	const readOnlyProvider = "https://devnet.dplabs-internal.com";

    // const [signer, setSigner] = useState(null);

    useEffect(() => {
      async function fetchSigner() {
        try {
          const signer = await getEthersSigner(config); // optionally pass { chainId }
          setSigner(signer);
        } catch (err) {
          console.error('Failed to get signer:', err);
        }
      }
  
      fetchSigner();
    }, [config, address]);

	return { signer, readOnlyProvider };
};
export default useEthersProvider;
