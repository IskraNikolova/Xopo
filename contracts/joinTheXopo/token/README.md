# XOPOToken
XOPOToken is an ERC20 token contract representing XOPO tokens. This contract allows users to vote using their XOPO tokens and specifies how XOPO tokens can be burned by their owners.

## Minting XOPO Tokens
The contract allows other contracts (XOPO-NFT contracts) to call the mintWithXOPONFT and mintWithXOPOContract functions to mint a certain amount of tokens to a designated address. EARN_MINTER_AMOUNT is the amount of tokens that can be minted when a new NFT is created by the minter, while EARN_TEAM_AMOUNT is the amount of tokens that can be minted when a new NFT is created by an admin. The default values are set to 100 tokens and 1000 tokens, respectively.

## Voting with XOPO Tokens
The vote function allows users to vote using their XOPO tokens. When a user votes, the amount of tokens used for voting is burned from their balance

### Functions
* constructor()
This function is the constructor for the XOPOToken contract. It initializes the ERC20 token with the name "XOPO Token" and the symbol "XOPO".

* setVoteContract(address _voteContract) external
This function allows the contract owner to set the vote contract address. Only the contract owner can call this function.

* mintWithXOPONFT(address _minter) external
This function allows other contracts (XOPO-NFT contracts) to call it and mint a certain amount of tokens to a designated address.

* mintWithXOPOContract(address _admin) external
This function allows other contracts (XOPO-NFT contracts) to call it and mint a certain amount of tokens to a designated address.

* burn(uint256 amount) public virtual
This function allows an account to burn their own XOPO tokens.

* burnFrom(address account, uint256 amount) public virtual
This function allows an approved account to burn XOPO tokens from another account.

* vote(uint256 amount) public
This function allows a user to vote using their XOPO tokens. The amount of XOPO tokens used for the vote will be burned.

### Events
* Vote(address indexed voter, uint256 amount)
This event is emitted when a user has successfully voted with their XOPO tokens. The event includes the address of the user that voted and the amount of XOPO tokens that were used for the vote.

### Variables
* EARN_MINTER_AMOUNT
  - A uint256 variable that determines the amount of XOPO tokens that can be minted when a new NFT is created by the minter. The default value is set to 100 tokens.

* EARN_TEAM_AMOUNT
 - A uint256 variable that determines the amount of XOPO tokens that can be minted when a new NFT is created by an admin. The default value is set to 1000 tokens.

### voteContract
The address of the vote contract that is set by the contract owner. Only the vote contract can call certain functions in this contract.
