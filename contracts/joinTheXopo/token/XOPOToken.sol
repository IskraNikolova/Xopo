// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./modifiers.sol";

/**
 * @title XOPOToken
 * @dev ERC20 token contract representing XOPO tokens.
 * This contract allows users to vote using their XOPO tokens
 * and specifies how XOPO tokens can be burned by their owners.
 */
contract XOPOToken is ERC20, Ownable, Modifiers {
    // The amount of XOPO tokens that are minted to
    //  the address that mint a XopoNFT.
    uint256 public EARN_MINTER_AMOUNT = 100;

    // The amount of XOPO tokens that are minted to
    //  the address that is part of XopoNFT team.
    uint256 public EARN_TEAM_AMOUNT = 1000;

    address public voteContract;

    /**
     * @dev Event emitted when a user has successfully voted with their XOPO tokens.
     * @param voter The address of the user that voted.
     * @param amount The amount of XOPO tokens that were used for the vote.
    */
    event Vote(address indexed voter, uint256 amount);

    modifier onlyVoteContract() {
		require(msg.sender == voteContract);
		_;
	}

    /**
     * @dev Constructor function that initializes the XOPO token contract
     */
    constructor()
        ERC20("XOPO Token", "XOPO") {
    }

    /**
     * @dev Allows the contract owner to set the vote contract address.
     * Only the owner can call this function.
     * @param _voteContract The address of the vote contract to set.
     */
    function setVoteContract(address _voteContract) external {
        require(msg.sender == owner(),
            "XOPO Token: Only the owner can set the vote contract.");
        voteContract = _voteContract;
    }

    /**
     * @dev allows other contracts (XOPO-NFT contracts) 
     * to call it and mint a certain amount of tokens to a designated address
     * @param _minter The address that will receive the minted tokens.
     **/
    function mintWithXOPONFT(address _minter)
        external
        onlyAdmin(msg.sender) {
        _mint(_minter, EARN_MINTER_AMOUNT);
    }

    /**
     * @dev allows other contracts (XOPO-NFT contracts) 
     * to call it and mint a certain amount of tokens to a designated address
     * @param _admin The artists or creators that will receive the minted tokens.
     **/
    function mintWithXOPOContract(address _admin)
        external
        onlyAdmin(msg.sender) {
        _mint(_admin, EARN_TEAM_AMOUNT);
    }

    /**
     * @dev Allows an account to burn their own XOPO tokens.
     * @param amount The amount of XOPO tokens to burn.
     */
    function burn(uint256 amount) public virtual {
        _burn(msg.sender, amount);
    }

    /**
     * @dev Allows an approved account to burn XOPO tokens from another account.
     * @param account The account that will have their XOPO tokens burned.
     * @param amount The amount of XOPO tokens to burn.
     */
    function burnFrom(address account, uint256 amount) public virtual {
        uint256 decreasedAllowance = allowance(account, msg.sender) - amount;
        _approve(account, msg.sender, decreasedAllowance);
        _burn(account, amount);
    }

    /**
     * @dev Allows a user to vote using their XOPO tokens.
     * @param amount The amount of XOPO tokens to vote with.
     */
    function vote(uint256 amount) public {
        require(voteContract != address(0),
            "XOPO Token: Vote contract has not been set yet.");
        require(balanceOf(msg.sender) >= amount,
            "XOPO Token: Insufficient XOPO balance.");
        
        // Burn XOPO tokens
        _burn(msg.sender, amount);

        // Emit event to indicate that a user has voted
        emit Vote(msg.sender, amount);
    }
}
