// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "./../utils/math/SafeMath.sol";

contract Modifiers {
    using SafeMath for uint256;

    address public owner = msg.sender;

    mapping (address => bool) internal isAdmin;

    uint internal adminsCount;

    modifier onlyAuthorized(address _sender) {
		require(owner == _sender);
		_;
	}

    modifier onlyAdmin(address _sender) {
		require(isAdmin[_sender]);
		_;
	}

    modifier onlyDudes(address _sender, address _artist) {
		require(isAdmin[_sender] || _sender == _artist);
		_;
	}

    modifier onlyArtist(address _artist) {
		require(msg.sender == _artist);
		_;
	}

    function addAdmin (address _admin)
        public
        onlyAuthorized(msg.sender) {
        isAdmin[_admin] = true;
        adminsCount = adminsCount
            .add(1);
    }

    function removeAdmin (address _admin)
        public
        onlyAuthorized(msg.sender) {
        isAdmin[_admin] = false;
        adminsCount = adminsCount
            .sub(1);
    }
}