import {
  CONNECT_WALLET,
  IS_RIGHT_CHAIN,
  CHAIN_ID_CHANGED,
  SUBSCRIBE_TO_EVENT
} from './types'

import {
  _connectToMetaMask,
  _switchToCurrentNetwork,
  _subscribeToEvChainChanged,
  _subscribeToEvAccountChanged
}
  from './../../modules/network.js'

import Identicon from 'identicon.js'

const connectWallet = async ({ commit, getters }) => {
  const { address, isRight } = await _connectToMetaMask()
  let avatar = ''
  if (address) {
    avatar = new Identicon(address, 420)
      .toString()
  }
  commit(CONNECT_WALLET, { userAddress: address, avatar })
  commit(IS_RIGHT_CHAIN, { isRight })
  if (!isRight) {
    await _switchToCurrentNetwork()
    commit(IS_RIGHT_CHAIN, { isRight: true })
  }

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
  const handleChainChanged = async (chainId, error) => {
    if (error) console.error('Xopo: ' + error)
    try {
      if (chainId !== getters.chainId) {
        const isRight = chainId.toLowerCase() === '0xa86a'
        commit(CHAIN_ID_CHANGED, { chainId })
        commit(IS_RIGHT_CHAIN, { isRight })

        console.log('Xopo: ChainId changed:', chainId)
        await _switchToCurrentNetwork()
        commit(IS_RIGHT_CHAIN, { isRight: true })
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
