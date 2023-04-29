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
    isMinted: true,
    usersNFTsAllCollections: {},
    chainId: config.network.chainId
  }
}
