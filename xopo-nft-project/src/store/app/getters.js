export function avatar (state) {
  return state.avatar
}

export function chainId (state) {
  return state.chainId
}

export function isRight (state) {
  return state.isRight
}

export function appTheme (state) {
  return state.theme
}

export function isSignUp (state) {
  return state.isSignUp
}

export function accounts (state) {
  return state.accounts
}

export function isOnFocus (state) {
  return state.isOnFocus
}

export function userAddress (state) {
  return state.userAddress
}

export function userNFTsAllCollections (state) {
  return (address) => state.usersNFTsAllCollections[`${address}`]
}

export function userCollectionByName (state) {
  return (collectionName, address) => state.usersNFTsAllCollections[`${address}`]
    .find((collection) =>
      collection.contractName === collectionName
    )
}
