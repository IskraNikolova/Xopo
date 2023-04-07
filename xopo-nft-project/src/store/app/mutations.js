import {
  CONNECT_WALLET,
  IS_RIGHT_CHAIN,
  CHAIN_ID_CHANGED
} from './types'

const mutations = {
  [CONNECT_WALLET]: (state, { userAddress, avatar }) => {
    state.userAddress = userAddress
    state.avatar = avatar
  },
  [CHAIN_ID_CHANGED]: (state, { chainId }) => {
    state.chainId = chainId
  },
  [IS_RIGHT_CHAIN]: (state, { isRight }) => {
    state.isRight = isRight
  }
}

export default mutations
