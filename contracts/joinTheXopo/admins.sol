// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "./../utils/math/SafeMath.sol";

contract Admins {
    using SafeMath for uint256;

    address public owner = msg.sender;

    mapping (address => bool) internal isAdmin;
    mapping (address => bool) internal isDAO;

    uint internal adminsCount;
    uint256 public DAOCount;

    modifier onlyAuthorized(address _sender) {
		require(owner == _sender);
		_;
	}

    modifier onlyAdmin(address _sender) {
		require(isAdmin[_sender]);
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
