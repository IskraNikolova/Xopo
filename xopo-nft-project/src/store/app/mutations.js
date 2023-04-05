import { CONNECT_WALLET } from './types'

const mutations = {
  [CONNECT_WALLET]: (state, { userAddress }) => {
    state.userAddress = userAddress
  }
}

export default mutations
