import Web3 from 'web3'
// import injected from 'web3-react'
// import Tx from 'ethereumjs-tx'
// const abiDecoder = require('abi-decoder')

import config from './config'
// import contractAbi from './../../builds/contract.json' // todo

import { _generateHashedCode } from './crypto.js'

// import { getPrivateKeyBuffer, initializeKeys } from './keys.js'

// import {
//   hexStringToAsciiString
// } from './string-conversion.js'

let web3 // contract

// abiDecoder.addABI(contractAbi)

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
      .request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] })
    const accountsPermission = permissions.find(
      (permission) => permission.parentCapability === 'eth_accounts'
    )
    if (accountsPermission) {
      const accounts = accountsPermission.caveats['0'].value
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
    web3.eth.defaultAccount = address
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

export const _initializeNetwork = async () => {
  try {
    // web3 = new Web3(`https://${config.network.endpointCChain}`)
    web3 = new Web3(getProvider({ endpoint: `wss://${config.network.endpointCChain}` }))
    // contract = await new web3.eth.Contract(contractAbi, config.network.contract)
  } catch (err) {
    console.log(err)
  }
}

const getProvider = ({ endpoint }) => {
  const provider = new Web3.providers.WebsocketProvider(endpoint)
  provider.on('connect', () => {
    console.log('WS Connected')
  })
  provider.on('error', e => {
    console.error('WS Error' + e)
    web3.setProvider(getProvider({ endpoint }))
  })
  provider.on('end', e => {
    console.error('WS End' + e)
  })
  return provider
}

// const getEstimatedGas = async ({ data, from }) => {
//   try {
//     const gas = await web3
//       .eth
//       .estimateGas({
//         to: config.network.contract,
//         from,
//         data
//       })
//     return gas
//   } catch (err) {
//     return 500000
//   }
// }

// const prepareTransaction = async (method, from) => {
//   try {
//     const data = method.encodeABI()
//     const estimatedGas = await getEstimatedGas({ data, from })
//     const gasPrice = await web3.eth.getGasPrice()

//     const transactionCount = await web3.eth.getTransactionCount(from, 'pending')

//     const rawTx = {
//       from,
//       chainId: config.network.cChainId,
//       nonce: parseInt(transactionCount),
//       gasPrice: parseInt(gasPrice),
//       gasLimit: parseInt(estimatedGas),
//       to: config.network.contract,
//       value: 0,
//       data
//     }

//     initializeKeys()
//     const tx = new Tx(rawTx)
//     tx.sign(getPrivateKeyBuffer())

//     return {
//       serializedTransaction: '0x' + tx.serialize().toString('hex'),
//       transactionHash: '0x' + tx.hash().toString('hex')
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }

// /**
//  * Send a method (transaction) to the network
//  * @param {Object} method contract method
//  * @returns {Promise<string>} transaction hash
//  */
// const executeMethod = async (method, from) => {
//   const response = await prepareTransaction(method, from)
//   if (!response) return
//   const { serializedTransaction, transactionHash } = response
//   return new Promise((resolve, reject) => {
//     web3.eth.sendSignedTransaction(serializedTransaction)
//       .on('transactionHash', (hash) => {
//         resolve(hash)
//         console.log('Transaction hash ' + hash)
//       })
//       .on('confirmation', (confirmationNumber, receipt) => {
//         if (confirmationNumber > 0) {
//           console.log('Transaction is confirmed! ' + transactionHash)
//         }
//       })
//       .on('error', (err) => {
//         if (err.message && err.message.includes('insufficient funds')) {
//           console.log('Insufficient funds')
//         } else if (err.message.includes('Transaction has been reverted by the EVM:')) {
//           console.log(err)
//           reject(new Error('Transaction Error! Possible reasons: the name is taken. if you don\'t change the name, remove it from the field or enter a new name.'))
//         }
//         console.log(err)
//         reject(err)
//       })
//   })
// }
// export const _getBalance = async (address) => web3.eth.getBalance(address)

export const hexNodeID = (id) => web3.eth.abi.encodeParameter('bytes32', stringToHex(id.substr(15)))

export const stringToHex = input => web3.utils.asciiToHex(input)

export const getBlockNumber = () => web3.eth.getBlockNumber()

export const _encode = (a, b) => {
  if (!a || !b) return
  const hash = _generateHashedCode(a, b)
  return web3.eth.abi.encodeParameter('bytes32', '0x' + hash)
}

export const _fromWei = (balance) => {
  if (!web3) return
  return web3.utils.fromWei(balance, 'ether')
}

export const utf8StringToHex = input => web3.utils.utf8ToHex(input).padEnd(66, '0')
