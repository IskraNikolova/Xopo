import {
  CONNECT_WALLET,
  CHAIN_ID_CHANGED
} from './types'

const mutations = {
  [CONNECT_WALLET]: (state, { userAddress, avatar }) => {
    state.userAddress = userAddress
    state.avatar = avatar
  },
  [CHAIN_ID_CHANGED]: (state, { chainId }) => {
    state.chainId = chainId
  }
}

export default mutations
