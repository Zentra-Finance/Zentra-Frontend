import { getConnectorClient } from '@wagmi/core';
import { BrowserProvider, JsonRpcSigner } from 'ethers';

/**
 * Converts a viem client into an ethers.js Signer
 * @param {object} client - The viem client object
 * @returns {JsonRpcSigner}
 */
function clientToSigner(client) {
  const { account, chain, transport } = client;

  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };

  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);

  return signer;
}

/**
 * Gets an ethers.js signer from a wagmi viem client
 * @param {object} config - wagmi config
 * @param {object} [options] - options like { chainId }
 * @returns {Promise<JsonRpcSigner>}
 */
export async function getEthersSigner(config, options = {}) {
  const client = await getConnectorClient(config, options);
  return clientToSigner(client);
}
