import {
  INIT_APP,
  SET_THEME,
  IS_ON_FOCUS,
  CONNECT_WALLET,
  IS_RIGHT_CHAIN,
  CHAIN_ID_CHANGED,
  CONNECTED_WALLETS,
  SET_DEFAULT_WALLET,
  SET_USER_COLLECTIONS,
  SUBSCRIBE_TO_ACCOUNT_CHANGED_EVENT,
  SUBSCRIBE_TO_NETWORK_CHANGED_EVENT
} from './types'

import {
  _getTokenUri,
  _getNFTByAddress,
  _initializeNetwork,
  _connectToMetaMask,
  _addAvalancheNetwork,
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

const { contracts } = config.network

import Identicon from 'identicon.js'
import axios from 'axios'

const initApp = async ({ commit, dispatch, getters }) => {
  try {
    _initializeNetwork()
    await setUserCollection({ commit, getters })
    if (getters.userAddress) {
      await dispatch(SUBSCRIBE_TO_ACCOUNT_CHANGED_EVENT)
      await dispatch(SUBSCRIBE_TO_NETWORK_CHANGED_EVENT)
    }
  } catch (err) {
    console.log(err)
  }
}

const setUserCollection = async ({ commit, getters }) => {
  try {
    const nfts = []
    for (let i = 0; i < contracts.length; i++) {
      const { contractName } = contracts[i]
      const ids = await _getNFTByAddress(getters.userAddress, contractName)
      if (!ids) return
      for (let i = 0; i < ids.length; i++) {
        const { tokenURI } = await _getTokenUri(ids[i], contractName)
        const uri = replace(tokenURI)
        const { data } = await axios.get(uri)
        const { name, description, image } = data
        const url = replace(image)
        nfts.push({ name, description, url, id: ids[i] })
      }
      commit(SET_USER_COLLECTIONS, {
        address: getters.userAddress,
        collectionName: contractName,
        nfts
      })
    }
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

const connectWallet = async ({ commit, dispatch }) => {
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
      _addAvalancheNetwork()
      commit(IS_RIGHT_CHAIN, { isRight: true })
    }

    await dispatch(SUBSCRIBE_TO_ACCOUNT_CHANGED_EVENT)
    await dispatch(SUBSCRIBE_TO_NETWORK_CHANGED_EVENT)
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
        const isRight = chainId
          .toLowerCase() === config
          .network
          .cChainId

        commit(CHAIN_ID_CHANGED, { chainId })
        commit(IS_RIGHT_CHAIN, { isRight })
        if (getters.isOnFocus) {
          _switchToCurrentNetwork()
            .then((res) => {
              if (res) {
                commit(
                  IS_RIGHT_CHAIN,
                  { isRight: true }
                )
              }
            })
            .catch((err) => {
              console.error(err)
            })
        }
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

function isOnFocus ({ commit }, isOnFocus) {
  if (isOnFocus) {
    _switchToCurrentNetwork()
      .then((res) => {
        if (res) {
          commit(
            IS_RIGHT_CHAIN,
            { isRight: true }
          )
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
  commit(IS_ON_FOCUS, { isOnFocus })
}

function replace (uri) {
  if (!uri) return ''
  return 'https://ipfs.io/ipfs/' + uri.replace('ipfs://', '')
}

export default {
  [INIT_APP]: initApp,
  [SET_THEME]: setTheme,
  [IS_ON_FOCUS]: isOnFocus,
  [CONNECT_WALLET]: connectWallet,
  [CONNECTED_WALLETS]: connectedWallets,
  [SET_DEFAULT_WALLET]: setDefaultWallet,
  [SET_USER_COLLECTIONS]: setUserCollection,
  [SUBSCRIBE_TO_NETWORK_CHANGED_EVENT]: subscribeToEvChainChanged,
  [SUBSCRIBE_TO_ACCOUNT_CHANGED_EVENT]: subscribeToEvAccountChanged
}
