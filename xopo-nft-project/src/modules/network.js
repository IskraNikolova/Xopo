import Web3 from 'web3'
// import Tx from 'ethereumjs-tx'
const abiDecoder = require('abi-decoder')

import config from './config'
import contractAbi from './../../builds/koloda.json' // todo

// import {
//   _generateHashedCode
// } from './crypto.js'

// import {
//   getPrivateKeyBuffer,
//   initializeKeys
// } from './keys.js'

// import {
//   hexStringToAsciiString
// } from './string-conversion.js'

let web3, web3M
let contract

abiDecoder.addABI(contractAbi)

export const AVALANCHE_MAINNET_PARAMS = {
  chainId: '0xA86A',
  chainName: 'Avalanche Mainnet C-Chain',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18
  },
  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://snowtrace.io/']
}

export const AVALANCHE_TESTNET_PARAMS = {
  chainId: '0xA869',
  chainName: 'Avalanche Testnet C-Chain',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18
  },
  rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://testnet.snowtrace.io/']
}

/**
 * Add Avalanche network to the Metamask wallet.
 */
export const _addAvalancheNetwork = () => {
  web3.eth.givenProvider
    .request({
      method: 'wallet_addEthereumChain',
      params: [AVALANCHE_MAINNET_PARAMS]
    })
    .catch((error) => {
      console.log(error)
    })
}

/**
 * Connects to the MetaMask wallet.
 * Requests account access and gets the user's address.
 * Returns the user's address and a boolean indicating whether they are on the right network.
 * If MetaMask is not installed, logs an error to the console.
 */
export const _connectToMetaMask = async () => {
  // Check if MetaMask is installed
  if (_isMetaMaskInstalled()) {
    try {
      const { ethereum } = window

      // Request account access and get the user's address
      const accounts = await _requestAccounts()
      const address = accounts[0]

      if (ethereum.chainId) {
        if (!(ethereum.chainId === config.network.chainId)) {
          // ethereum.chainId === config.network.fujiChainId)) {
          return { address, isRight: false }
        }
      }

      return { address, isRight: true }
    } catch (error) {
      console.error('Xopo: User denied account access:', error)
    }
  } else {
    console.error('Xopo: Please install MetaMask!')
  }
}

export const _isMetaMaskInstalled = () => {
  return Boolean(window.ethereum && window.ethereum.isMetaMask)
}

export const _getAllConnectedWallets = async () => {
  try {
    const permissions = await window
      .ethereum
      .request({
        method: 'wallet_requestPermissions',
        params: [{ eth_accounts: {} }]
      })

    const accountsPermission = permissions
      .find((permission) =>
        permission.parentCapability === 'eth_accounts'
      )

    if (accountsPermission) {
      const accounts = accountsPermission
        .caveats['0']
        .value

      return accounts
    }
  } catch (err) {
    console.error(err)
  }
}

export const _requestAccounts = async () => {
  const { ethereum } = window
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
  return accounts
}

export const _setToDefaultAccount = async (address) => {
  try {
    web3M.eth.defaultAccount = address
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

export const _subscribeToEvAccountChanged = ({ handler }) => {
  window.ethereum.on('accountsChanged', handler)
}

export const _subscribeToEvChainChanged = ({ handler }) => {
  window.ethereum.on('chainChanged', handler)
}

export const _switchToCurrentNetwork = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: config.network.chainId }]
    })
    return true
  } catch (err) {
    return false
  }
}

/**
 * Initialize network and set Web3 provider.
 * @returns {Promise<void>} Promise object that represents the initialization process.
 */
export const _initializeNetwork = async () => {
  try {
    // Initialize Web3 with the WebSocket provider
    // web3 = new Web3(`https://${config.network.endpointCChain}`)
    web3 = new Web3(getProvider({ endpoint: `wss://${config.network.endpointCChain}` }))
    web3M = new Web3(window.ethereum)

    // Initialize contract
    contract = await new web3M.eth.Contract(contractAbi, config.network.kolodaAddress)
  } catch (err) {
    console.log(err)
  }
}

/**
 * Get Web3 WebSocket provider for the specified endpoint.
 * @param {Object} options - WebSocket endpoint options.
 * @param {string} options.endpoint - WebSocket endpoint.
 * @returns {Web3.providers.WebsocketProvider} Web3 WebSocket provider object.
 */
const getProvider = ({ endpoint }) => {
  const provider = new Web3
    .providers
    .WebsocketProvider(endpoint)

  // Set up event listeners for the WebSocket provider
  provider.on('connect', () => {
    console.log('WS Connected')
  })
  provider.on('error', e => {
    console.error('WS Error' + e)
    // Reconnect on error
    web3.setProvider(getProvider({ endpoint }))
  })
  provider.on('end', e => {
    // Reconnect on close
    console.error('WS End' + e)
  })

  return provider
}

const getEstimatedGas = async ({ method }) => {
  try {
    const gas = await method.estimateGas({ gas: 5000000 })
    return gas
  } catch (err) {
    return 500000
  }
}

const prepareTransaction = async ({ method, from, value }) => {
  try {
    let etherToSend = 0
    if (value > 0) etherToSend = web3M.utils.toWei(value.toString(), 'ether')
    const estimatedGas = await getEstimatedGas({ method })

    const tx = {
      from,
      gasLimit: parseInt(estimatedGas),
      value: etherToSend
    }

    return { tx }
  } catch (err) {
    console.log(err)
  }
}

/**
 * Send a method (transaction) to the network
 * @param {Object} method contract method
 * @returns {Promise<string>} transaction hash
 */
const executeMethod = async ({ method, from, value, params }) => {
  const response = await prepareTransaction({ method, from, value })
  if (!response) return
  const { tx } = response

  return new Promise((resolve, reject) => {
    contract.methods.mint(...params).send(tx)
      .on('transactionHash', function (hash) {
        console.log('Transaction Hash:', hash)
      })
      .on('receipt', function (receipt) {
        console.log('Receipt:', receipt)
        resolve(receipt)
      })
      .on('error', async function (error) {
        console.error('Error:', error)
        if (error.code === 4100) {
          // await _getAllConnectedWallets() // todo notification for switch to other address
          // executeMethod({ method, from, value, params })
        } else {
          reject(error)
        }
      })
  })
}

/**
 * Send a verify code
 * @param {Object} params parameters
 * @param {string} params.code
 * @param {string} params.nodeID
 */

export const _mint = async ({ counts, value, from }) => {
  try {
    const data = counts
    if (!data) return

    const method = contract
      .methods
      .mint(data)

    return executeMethod({ method, value, from, params: [counts] })
  } catch (err) {
    throw new Error('Xopo: ' + err.message)
  }
}

export const _getNFTByAddress = async (address) => {
  if (!address) return
  try {
    const tokenIds = await contract
      .methods
      .walletOfOwner(address)
      .call()

    return tokenIds
  } catch (err) {
    throw new Error('Xopo ' + err.message)
  }
}

export const _getTokenUri = async (id) => {
  if (!id) return

  try {
    const tokenURI = await contract
      .methods
      .tokenURI(id)
      .call()

    return { tokenURI }
  } catch (err) {
    throw new Error('Xopo ' + err.message)
  }
}

export const _pendingCount = async () => {
  try {
    const pendingCount = await contract
      .methods
      .pendingCount
      .call()

    return { pendingCount }
  } catch (err) {
    throw new Error('Xopo ' + err.message)
  }
}

// export const _getBalance = async (address) => web3.eth.getBalance(address)

export const hexNodeID = (id) => web3.eth.abi.encodeParameter('bytes32', stringToHex(id.substr(15)))

export const stringToHex = input => web3.utils.asciiToHex(input)

export const getBlockNumber = () => web3.eth.getBlockNumber()

export const _fromWei = (balance) => {
  if (!web3) return
  return web3.utils.fromWei(balance, 'ether')
}

export const utf8StringToHex = input => web3.utils.utf8ToHex(input).padEnd(66, '0')
