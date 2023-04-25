import {
  LOGOUT,
  SET_THEME,
  IS_ON_FOCUS,
  CONNECT_WALLET,
  IS_RIGHT_CHAIN,
  CHAIN_ID_CHANGED,
  CONNECTED_WALLETS
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
  }
}

export default mutations
