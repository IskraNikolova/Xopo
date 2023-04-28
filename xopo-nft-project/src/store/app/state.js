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
    usersNFTsAllCollections: {},
    chainId: config.network.chainId
  }
}
