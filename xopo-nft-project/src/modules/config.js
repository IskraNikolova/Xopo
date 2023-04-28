import kolodaAbi from './../../builds/koloda.json'

export default {
  network: {
    chainId: '0xa869', // '0xa86a',
    fujiChainId: '0xa869',
    ip: 'api.avax.network',
    protocol: 'https',
    networkId: 1,
    port: 443,
    cChainId: 43114,
    cChainTestId: 43113,
    endpointCChain: 'api.avax.network/ext/bc/C/ws',
    explorerApiBaseUrl: 'https://explorerapi.avax.network/',
    endpointUrls:
    [
      { name: 'Avalanche Mainnet', url: 'https://api.avax.network:443/' },
      { name: 'Fuji Testnet', url: 'https://api.avax-test.network:443/' }
    ],
    contracts: [
      { contractName: 'koloda', address: '0x52674570B4b8F947cf19b537bb95BE48e6cc79d4', abi: kolodaAbi }
    ]
  }
}
