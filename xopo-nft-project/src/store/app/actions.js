import {
  CONNECT_WALLET
} from './types'

import { connectToMetaMask } from './../../modules/network.js'
import { getAvatar } from './../../utils'

const connectWallet = async ({ commit }) => {
  const address = await connectToMetaMask()
  const avatar = getAvatar(address).monster
  console.log(avatar)
  commit(CONNECT_WALLET, { userAddress: address, avatar })
}
export default {
  [CONNECT_WALLET]: connectWallet
}
