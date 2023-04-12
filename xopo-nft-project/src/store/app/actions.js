import {
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
  _addAvalancheNetwork,
  _initializeNetwork,
  _connectToMetaMask,
  _setToDefaultAccount,
  _switchToCurrentNetwork,
  _getAllConnectedWallets,
  _subscribeToEvChainChanged,
  _subscribeToEvAccountChanged
}
  from './../../modules/network.js'

import {
  _getBalance
}
  from './../../modules/api.js'

import config from './../../modules/config'

import Identicon from 'identicon.js'

const initApp = async ({ dispatch }) => {
  try {
    await _initializeNetwork()
  } catch (err) {
    console.log(err)
  }
}

const setDefaultWallet = ({ commit }, { account }) => {
  if (!account) return
  _setToDefaultAccount(account.userAddress)
  commit(CONNECT_WALLET, {
    userAddress: account.userAddress,
    avatar: account.avatar
  })
}

const connectWallet = async ({ commit, getters }) => {
  try {
    const { address, isRight } = await _connectToMetaMask()
    let avatar = ''
    if (address) {
      avatar = new Identicon(address, 420)
        .toString()
    }
    commit(CONNECT_WALLET, { userAddress: address, avatar })
    const balance = await _getBalance({ address })

    let accounts = []
    if (accounts.length > 0) {
      accounts = []
      accounts.push({ userAddress: address, avatar, balance })
    } else accounts.unshift({ userAddress: address, avatar, balance })
    commit(CONNECTED_WALLETS, { accounts })

    commit(IS_RIGHT_CHAIN, { isRight })
    if (!isRight) {
      await _addAvalancheNetwork()
      commit(IS_RIGHT_CHAIN, { isRight: true })
    }

    await subscribeToEvAccountChanged({ commit, getters })
    await subscribeToEvChainChanged({ commit, getters })
  } catch (err) {
    console.error(err)
  }
}

const connectedWallets = async ({ commit }) => {
  try {
    const wallets = await _getAllConnectedWallets()
    const accounts = await Promise.all(
      wallets.map(async (address) => {
        let avatar = ''
        if (address) {
          avatar = new Identicon(address, 420).toString()
        }
        const balance = await _getBalance({ address })
        return { userAddress: address, avatar, balance }
      })
    )
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
        const users = getters.accounts
        let acc = users.concat(new Array({ userAddress: accounts[0], avatar }))
        acc = await Promise.all(
          acc.map(async (address) => {
            let avatar = ''
            if (address) {
              avatar = new Identicon(address, 420).toString()
            }
            const balance = await _getBalance({ address })
            return { userAddress: address, avatar, balance }
          })
        )
        commit(CONNECTED_WALLETS, { accounts: acc })
      }
    } catch (err) {
    }
  }

  _subscribeToEvAccountChanged({
    handler: handleAccountChange
  })
}

async function subscribeToEvChainChanged ({ commit, getters }) {
  const handleChainChanged = (chainId, error) => {
    if (error) console.error('Xopo: ' + error)
    try {
      if (chainId !== getters.chainId) {
        const isRight = chainId.toLowerCase() === config.network.cChainId
        // chainId.toLowerCase() === '0xa869' // todo config
        console.log('Xopo: ChainId changed:', chainId)
        commit(CHAIN_ID_CHANGED, { chainId })
        commit(IS_RIGHT_CHAIN, { isRight })
        _switchToCurrentNetwork()
          .then((res) => {
            if (res) commit(IS_RIGHT_CHAIN, { isRight: true })
          })
          .catch((err) => {
            console.error(err)
          })
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
  [INIT_APP]: initApp,
  [SET_THEME]: setTheme,
  [CONNECT_WALLET]: connectWallet,
  [CONNECTED_WALLETS]: connectedWallets,
  [SET_DEFAULT_WALLET]: setDefaultWallet,
  [SUBSCRIBE_TO_EVENT]: subscribeToEvAccountChanged
}
