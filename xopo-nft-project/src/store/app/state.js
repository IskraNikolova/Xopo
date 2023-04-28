import config from './../../modules/config'

export default function () {
  return {
    avatar: '',
    accounts: [],
    isRight: true,
    theme: 'dark',
    isOnFocus: true,
    isSignUp: false,
    userAddress: '',
    userNFTsAllCollections: [],
    chainId: config.network.chainId
  }
}
