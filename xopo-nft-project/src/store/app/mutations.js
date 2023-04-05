import { CONNECT_WALLET } from './types'

const mutations = {
  [CONNECT_WALLET]: (state, { userAddress, avatar }) => {
    state.userAddress = userAddress
    state.avatar = avatar
  }
}

export default mutations
