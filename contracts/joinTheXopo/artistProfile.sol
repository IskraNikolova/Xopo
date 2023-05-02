// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "./artistStructs.sol";
import "./admins.sol";

/**

@title Artists profile.

@notice This contract is used to manage the profiles of artists on the blockchain.

It allows admins to add new artists and new contracts for existing artists. Artists can edit their profile information.
*/
contract ArtistsProfile is Admins, ArtistStructures {
    // Mapping that stores the ArtistStruct for each artist address
	mapping (address => ArtistStruct) public artists;

    // Mapping that stores the IPFS hash for the ABI of each contract for each artist
    mapping (address => mapping(address => string)) public abis;

    // Mapping that stores the array of contract addresses for each artist
    mapping (address => address[]) public artistContracts;

   // Mapping that stores whether a name has already been used
    mapping (bytes32 => bool) public isUsedName;

    /**
    @notice This function allows an admin to add a new contract for an artist.
    @param _artist The address of the artist
    @param _contractAddress The address of the contract to be added
    @param ipfsHashAbi The IPFS hash for the contract's ABI
    @return bool Returns true if the contract was added successfully
    */
    function setNewContract (
        address _artist,
        address _contractAddress,
        string memory ipfsHashAbi)
        public
        onlyAdmin(msg.sender) returns (bool) {
            artistContracts[_artist]
                .push(_contractAddress);
            abis[_artist][_contractAddress] = ipfsHashAbi;
            return true;
        }

    
    /**
    @notice This function allows an admin to add a new artist.
    @param _initStruct The InitArtistStruct that contains the artist's initial information
    @return bool Returns true if the artist was added successfully
    */
    function setNewArtist (InitArtistStruct memory _initStruct)
        external onlyAdmin(msg.sender) returns (bool) {
            ArtistStruct memory _artist = ArtistStruct(
    			_initStruct.user,
    			_initStruct.artistType,
    			_initStruct.name,
                "", "", "",
                _initStruct.email,
    			_initStruct.urls,
                _initStruct.media);
            artists[_initStruct.user] = _artist;
            return true;
        }

    /**
    @notice This function allows an artist to edit their profile information.
    @param _name The new name for the artist
    @param _avatar The new avatar for the artist
    @param _bio The new bio for the artist
    @param _email The new email for the artist
    @param _urls The new array of URLs for the artist
    @param _media The new media information for the artist
    @return isSuccess Returns true if the editing was successful
    */
    function editArtistInfo (
        bytes32 _name,
        bytes memory _avatar,
        bytes memory _bio,
        bytes32 _email,
        bytes32[] memory _urls,
        bytes memory _media)
        external returns (bool isSuccess) {
            if (artists[msg.sender].name != _name) {
                require(!isUsedName[_name], 'The name is taken');

                isUsedName[artists[msg.sender].name] = false;
                artists[msg.sender].name = _name;
                isUsedName[_name] = true;
            }
            
            artists[msg.sender].name = _name;
            artists[msg.sender].avatar = _avatar;
            artists[msg.sender].bio = _bio;
            artists[msg.sender].email = _email;
            artists[msg.sender].urls = _urls;
            artists[msg.sender].media = _media;

            isSuccess = true;
        }
}
