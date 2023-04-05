// import Web3 from 'web3'
// import Tx from 'ethereumjs-tx'
// const abiDecoder = require('abi-decoder')

// import config from './config'
// import contractAbi from './../../builds/contract.json' // todo

import { _generateHashedCode } from './crypto.js'

// import { getPrivateKeyBuffer, initializeKeys } from './keys.js'

// import {
//   hexStringToAsciiString
// } from './string-conversion.js'

let web3 // contract

// abiDecoder.addABI(contractAbi)

export const connectToMetaMask = async () => {
  // Check if MetaMask is installed
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!')
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      // Get the user's address
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      const address = accounts[0]
      console.log('Connected to MetaMask with address:', address)
      return address
    } catch (error) {
      console.error('User denied account access:', error)
    }
  } else {
    console.error('Please install MetaMask!')
  }
}

export const _initializeNetwork = async () => {
  try {
    // web3 = new Web3(`https://${config.network.endpointCChain}`)
    // web3 = new Web3(getProvider({ endpoint: `wss://${config.network.endpointCChain}` }))
    // contract = await new web3.eth.Contract(contractAbi, config.network.contract)
  } catch (err) {
    console.log(err)
  }
}

// const getProvider = ({ endpoint }) => {
//   const provider = new Web3.providers.WebsocketProvider(endpoint)
//   provider.on('connect', () => {
//     console.log('WS Connected')
//   })
//   provider.on('error', e => {
//     console.error('WS Error' + e)
//     web3.setProvider(getProvider({ endpoint }))
//   })
//   provider.on('end', e => {
//     console.error('WS End' + e)
//   })
//   return provider
// }

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

export const hexNodeID = (id) => web3.eth.abi.encodeParameter('bytes32', stringToHex(id.substr(15)))
export const stringToHex = input => web3.utils.asciiToHex(input)

export const getBlockNumber = () => web3.eth.getBlockNumber()

export const _encode = (a, b) => {
  if (!a || !b) return
  const hash = _generateHashedCode(a, b)
  return web3.eth.abi.encodeParameter('bytes32', '0x' + hash)
}

export const utf8StringToHex = input => web3.utils.utf8ToHex(input).padEnd(66, '0')

export const getImageForAddress = async (address) => {
  // Get the ENS name for the address
  const ensName = await getENSName(address)
  if (!ensName) {
    console.log(`No ENS name found for address ${address}`)
    return null
  }

  // Construct the URL for the ENS profile picture
  const imageUrl = `https://app.ens.domains/api/v1/avatar/${ensName}`
  console.log(`Retrieving image for address ${address} from ${imageUrl}`)

  // Fetch the image
  try {
    const response = await fetch(imageUrl)
    if (response.ok) {
      const blob = await response.blob()
      return URL.createObjectURL(blob)
    } else {
      console.error(`Error fetching image for address ${address}: ${response.status}`)
      return null
    }
  } catch (error) {
    console.error(`Error fetching image for address ${address}: ${error.message}`)
    return null
  }
}

async function getENSName (address) {
  // Get the ENS name for the address
  try {
    const response = await fetch(`https://api.ens.domains/v1/accounts/${address}`)
    if (response.ok) {
      const data = await response.json()
      return data.names[0].name
    } else {
      console.error(`Error fetching ENS name for address ${address}: ${response.status}`)
      return null
    }
  } catch (error) {
    console.error(`Error fetching ENS name for address ${address}: ${error.message}`)
    return null
  }
}