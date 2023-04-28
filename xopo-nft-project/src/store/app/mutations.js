// import { deepMerge } from 'util'

import {
  LOGOUT,
  SET_THEME,
  IS_ON_FOCUS,
  CONNECT_WALLET,
  IS_RIGHT_CHAIN,
  CHAIN_ID_CHANGED,
  CONNECTED_WALLETS,
  SET_USER_COLLECTIONS
} from './types'

const mutations = {
  [LOGOUT]: (state, { isSignUp }) => {
    state.isSignUp = isSignUp
  },
  [SET_THEME]: (state, { theme }) => {
    state.theme = theme
  },
  [IS_ON_FOCUS]: (state, { isOnFocus }) => {
    state.isOnFocus = isOnFocus
  },
  [IS_RIGHT_CHAIN]: (state, { isRight }) => {
    state.isRight = isRight
  },
  [CHAIN_ID_CHANGED]: (state, { chainId }) => {
    state.chainId = chainId
  },
  [CONNECTED_WALLETS]: (state, { accounts }) => {
    state.accounts = accounts
  },
  [CONNECT_WALLET]: (state, { userAddress, avatar }) => {
    state.userAddress = userAddress
    state.avatar = avatar
  },
  [SET_USER_COLLECTIONS]: (state, { collectionName, nfts }) => {
    let newCollection
    const collection = state
      .userNFTsAllCollections
      .find((item) =>
        item.contractName === collectionName
      )

    if (!collection) {
      newCollection = {
        contractName: collectionName,
        nfts
      }
      state
        .userNFTsAllCollections
        .push(newCollection)
    } else {
      // .deepMerge(state.userNFTsAllCollections, newCollection)
      state.userNFTsAllCollections.concat(newCollection)
    }
  }
}

export default mutations
