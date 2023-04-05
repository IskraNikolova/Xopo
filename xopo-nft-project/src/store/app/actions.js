import {
  CONNECT_WALLET
} from './types'

const connectWallet = ({ commit }) => {
  console.log('hello')
  commit(CONNECT_WALLET, { userAddress: '' })
}
export default {
  [CONNECT_WALLET]: connectWallet
}
