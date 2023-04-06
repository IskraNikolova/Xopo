import {
  CONNECT_WALLET,
  CHAIN_ID_CHANGED,
  SUBSCRIBE_TO_EVENT
} from './types'

import {
  _connectToMetaMask,
  _subscribeToEvChainChanged,
  _subscribeToEvAccountChanged
}
  from './../../modules/network.js'

import Identicon from 'identicon.js'

const connectWallet = async ({ commit, getters }) => {
  const address = await _connectToMetaMask()
  let avatar = ''
  if (address) {
    avatar = new Identicon(address, 420)
      .toString()
  }
  commit(CONNECT_WALLET, { userAddress: address, avatar })
  subscribeToEvAccountChanged({ commit, getters })
  subscribeToEvChainChanged({ commit, getters })
}

function subscribeToEvAccountChanged ({ commit, getters }) {
  const handleAccountChange = (accounts, error) => {
    if (error) console.error('Xopo: ' + error)
    try {
      if (accounts[0] !== getters.userAddress) {
        const avatar = new Identicon(accounts[0], 420)
          .toString()
        commit(CONNECT_WALLET, { userAddress: accounts[0], avatar })
        console.log('Xopo: Wallet address changed:', accounts[0])
        // Do something here when the wallet address changes
      }
    } catch (err) {
      console.error('Xopo: ' + err)
    }
  }

  _subscribeToEvAccountChanged({
    handler: handleAccountChange
  })
}

function subscribeToEvChainChanged ({ commit, getters }) {
  const handleChainChanged = (chainId, error) => {
    if (error) console.error('Xopo: ' + error)
    try {
      if (chainId !== getters.chainId) {
        commit(CHAIN_ID_CHANGED, { chainId })
        console.log('Xopo: ChainId changed:', getters.chainId)
        // Do something here when the ChainId changes
      }
    } catch (err) {
      console.error('Xopo: ' + err)
    }
  }

  _subscribeToEvChainChanged({
    handler: handleChainChanged
  })
}

export default {
  [CONNECT_WALLET]: connectWallet,
  [SUBSCRIBE_TO_EVENT]: subscribeToEvAccountChanged
}
