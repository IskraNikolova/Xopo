// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "./xopoStructs.sol";
import "./modifiers.sol";

/**

@title Artists profile.

@notice This contract is used to manage the profiles of artists on the blockchain.

It allows admins to add new artists and new contracts for existing artists. Artists can edit their profile information.
*/
contract ArtistsProfile is Modifiers, XopoStructures {
    // Mapping that stores the ArtistStruct for each artist address
	mapping (address => ArtistStruct) public artists;

    // Mapping that stores the Collection struct of each user adress for each contract address
    mapping (address => mapping(address => CollectionStruct)) public collections;

    // Mapping that stores the IPFS hash for the ABI of each contract for each artist
    mapping (address => mapping(address => string)) public abis;

    // Mapping that stores the array of contract addresses for each artist
    mapping (address => address[]) public artistContracts;  

   // Mapping that stores whether a name has already been used
    mapping (bytes32 => bool) public isUsedName;

    /**
    * @notice This function allows an admin to add a new contract for an artist.
    * @param _artist The address of the artist
    * @param _contractAddress The address of the contract to be added
    * @param ipfsHashAbi The IPFS hash for the contract's ABI
    * @return bool Returns true if the contract was added successfully
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
    * @notice This function is used by the admin to add a new artist to the platform.
    * @dev Only the admin can call this function.
    * @param _user The address of the new artist.
    * @param _artistType The type of the artist.
    * @param _name The name of the artist.
    * @param _email The email of the artist.
    * @param _media An array of media associated with the artist.
    */
    function setNewArtist (
        address _user,
        ArtistType _artistType,
        bytes32 _name,
        bytes32 _email,
        bytes memory _media)
        external onlyAdmin(msg.sender) {
            require(!isUsedName[_name], "The name is taken");

            bytes memory avatar = new bytes(0);
            bytes memory banner = new bytes(0);
            bytes memory bio = new bytes(0);
            ArtistStruct memory _artist = ArtistStruct(
    			_artistType,
    			_name,
                avatar,
                banner,
                bio,
                _email,
                _media);
            artists[_user] = _artist;
        }
    
    /**
    * @notice This function is used by the admin to set the collection type for a given contract address and artist.
    * @dev Only the admin can call this function.
    * @param _type The type of the collection.
    * @param _artist The address of the artist associated with the collection.
    * @param _contract The address of the contract associated with the collection.
    */
    function setCollectionType(
        uint8 _type,
        address _artist,
        address _contract)
        public
        onlyAdmin(msg.sender)
        returns (bool) {
        CollectionStruct memory collection =
            collections[_artist][_contract];
        collection.collectionType = CollectionType(_type);
        collections[_artist][_contract] = collection;
        return true;
    }

    /**
    * @notice This function allows an admin or to add a new collection.
    * @param _user The value that contains the artist's address
    * @param _artistType The value that contains the type of artist
    * @param _collectionName The value that contains name of collection
    * @param _banners The value that contains the link to image for banner
    * @param _description The value that contains the description of collection
    * @param _contractAddress The value that contains the contract's address
    * @return bool Returns true if the collection was added successfully
    */
    function setNewCollection (
        address _user,
        uint8 _artistType,
        uint8 _collectionType,
        bytes32 _collectionName,
        bytes[] memory _banners,
        bytes memory _description,
        address _contractAddress)
        external onlyAdmin(msg.sender) returns (bool) {
            CollectionStruct memory collection_ = CollectionStruct(
    			ArtistType(_artistType),
                CollectionType(_collectionType),
    			_collectionName,
    			_banners,
                _description);
            collections[_user][_contractAddress] = collection_;
            return true;
        }
    
    /**
    * @notice This function is used to edit the data of a collection, including banners and description.
    * @dev Only the admins or artist can call this function.
    * @param _banners An array of bytes representing the new banners for the collection.
    * @param _description The new description for the collection.
    * @param _artist The address of the artist associated with the collection.
    * @param _contract The address of the contract associated with the collection.
    * @return A boolean indicating whether the operation was successful or not.
    */
    function editCollectionData (
        bytes[] memory _banners,
        bytes memory _description,
        address _artist,
        address _contract
    ) external onlyDudes(msg.sender, _artist)
    returns (bool) {
        CollectionStruct memory collection =
            collections[_artist][_contract];
        collection.banners = _banners;
        collection.description = _description;
        collections[_artist][_contract] = collection;
        return true;
    }

    /**
    * @notice This function allows an artist to edit their profile information.
    * @dev Only the admins or artist can call this function.
    * @param _artist The artist's address
    * @param _name The new name for the artist
    * @param _avatar The new avatar for the artist
    * @param _bio The new bio for the artist
    * @return isSuccess Returns true if the editing was successful
    */
    function editArtistInfo (
        address _artist,
        bytes32 _name,
        bytes memory _avatar,
        bytes memory _bio)
        external onlyDudes(msg.sender, _artist)
        returns (bool isSuccess) {
            if (artists[_artist].name != _name) {
                require(!isUsedName[_name], "The name is taken");

                isUsedName[artists[_artist].name] = false;
                artists[_artist].name = _name;
                isUsedName[_name] = true;
            }
            
            artists[_artist].name = _name;
            artists[_artist].avatar = _avatar;
            artists[_artist].bio = _bio;

            isSuccess = true;
        }
    /**
    * @notice This function allows an artist to edit their media information.
    * @param _artist The artist's address
    * @param _email The new email for the artist
    * @param _media The new media information for the artist
    * @return isSuccess Returns true if the editing was successful
    */
    function editArtistMedia (
        address _artist,
        bytes32 _email,
        bytes memory _media)
        external onlyDudes(msg.sender, _artist)
        returns (bool isSuccess) {
            artists[_artist].email = _email;
            artists[_artist].media = _media;

            isSuccess = true;
        }
}
