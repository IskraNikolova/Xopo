import {
  LOGOUT,
  SET_THEME,
  CONNECT_WALLET,
  IS_RIGHT_CHAIN,
  CHAIN_ID_CHANGED,
  CONNECTED_WALLETS
} from './types'

const mutations = {
  [LOGOUT]: (state, { isSignUp }) => {
    state.isSignUp = isSignUp
  },
  [CONNECT_WALLET]: (state, { userAddress, avatar }) => {
    state.userAddress = userAddress
    state.avatar = avatar
  },
  [CONNECTED_WALLETS]: (state, { accounts }) => {
    state.accounts = accounts
  },
  [CHAIN_ID_CHANGED]: (state, { chainId }) => {
    state.chainId = chainId
  },
  [IS_RIGHT_CHAIN]: (state, { isRight }) => {
    state.isRight = isRight
  },
  [SET_THEME]: (state, { theme }) => {
    state.theme = theme
  }
}

export default mutations
