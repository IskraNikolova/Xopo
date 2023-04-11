import {
  // LOGOUT,
  INIT_APP,
  SET_THEME,
  CONNECT_WALLET,
  IS_RIGHT_CHAIN,
  CHAIN_ID_CHANGED,
  CONNECTED_WALLETS,
  SET_DEFAULT_WALLET,
  SUBSCRIBE_TO_EVENT
} from './types'

import {
  _initializeNetwork,
  _connectToMetaMask,
  _setToDefaultAccount,
  _switchToCurrentNetwork,
  _getAllConnectedWallets,
  _subscribeToEvChainChanged,
  _subscribeToEvAccountChanged
}
  from './../../modules/network.js'

import Identicon from 'identicon.js'

const initApp = async () => {
  try {
    _initializeNetwork()
  } catch (err) {
    console.log(err)
  }
}

// const logout = async ({ commit, dispatch }) => {
//   try {
//     const isSignUp = await _logout()
//     commit(LOGOUT, { isSignUp })
//     await dispatch(CONNECT_WALLET)
//   } catch (err) {
//     console.log(err)
//   }
// }

const setDefaultWallet = ({ commit }, { account }) => {
  if (!account) return
  _setToDefaultAccount(account.userAddress)
  commit(CONNECT_WALLET, { userAddress: account.userAddress, avatar: account.avatar })
}

const connectWallet = async ({ commit, getters }) => {
  const { address, isRight } = await _connectToMetaMask()
  let avatar = ''
  if (address) {
    avatar = new Identicon(address, 420)
      .toString()
  }
  commit(CONNECT_WALLET, { userAddress: address, avatar })

  let accounts = getters.accounts
  if (accounts.length > 0) {
    accounts = []
    accounts.push({ userAddress: address, avatar })
  } else accounts.unshift({ userAddress: address, avatar })
  commit(CONNECTED_WALLETS, { accounts })

  commit(IS_RIGHT_CHAIN, { isRight })
  if (!isRight) {
    await _switchToCurrentNetwork()
    commit(IS_RIGHT_CHAIN, { isRight: true })
  }

  await subscribeToEvAccountChanged({ commit, getters })
  subscribeToEvChainChanged({ commit, getters })
}

const connectedWallets = async ({ commit }) => {
  try {
    const wallets = await _getAllConnectedWallets()
    const accounts = wallets.map(address => {
      let avatar = ''
      if (address) {
        avatar = new Identicon(address, 420).toString()
      }
      return { userAddress: address, avatar }
    })

    commit(CONNECTED_WALLETS, { accounts })

    const userAddress = accounts[0].userAddress
    const avatar = accounts[0].avatar
    commit(CONNECT_WALLET, { userAddress, avatar })
  } catch (err) {
  }
}

async function subscribeToEvAccountChanged ({ commit, getters }) {
  const handleAccountChange = async (accounts, error) => {
    if (error) console.error('Xopo: ' + error)
    try {
      if (accounts.length < 1) {
        commit(CONNECT_WALLET, { userAddress: '', avatar: '' })
      }
      if (accounts[0] !== getters.userAddress) {
        const avatar = new Identicon(accounts[0], 420)
          .toString()

        commit(CONNECT_WALLET, { userAddress: accounts[0], avatar })
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
        const isRight = chainId.toLowerCase() === '0xa86a' ||
          chainId.toLowerCase() === '0xa869' // todo config

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

function setTheme ({ commit }, theme) {
  commit(SET_THEME, { theme })
}

export default {
  // [LOGOUT]: logout,
  [INIT_APP]: initApp,
  [SET_THEME]: setTheme,
  [CONNECT_WALLET]: connectWallet,
  [CONNECTED_WALLETS]: connectedWallets,
  [SET_DEFAULT_WALLET]: setDefaultWallet,
  [SUBSCRIBE_TO_EVENT]: subscribeToEvAccountChanged
}
