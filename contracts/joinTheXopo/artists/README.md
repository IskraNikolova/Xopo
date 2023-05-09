# ArtistsProfile Contract
This Solidity smart contract is used specifically for managing the profiles of artists who are part of the **'Xopo' team** and are using the **'Join the Xopo'** platform. The contract allows admins to add new artists to the platform and also allows existing artists to edit their profile information. 

## License
This project is licensed under the terms of the MIT license. See LICENSE for more information.

## Usage
This contract uses Solidity version 0.8.7.

## XopoStructures Contract
This contract imports the XopoStructures.sol contract, which defines the following data structures:

 . **ArtistType**: an enum that defines the type of an artist.
 . **CollectionType**: an enum that defines the type of a collection.
 . **ArtistStruct**: a struct that defines the artist's profile information.
 . **CollectionStruct**: a struct that defines the collection information.

## Modifiers Contract
This contract imports the modifiers.sol contract, which defines the following modifier:
 . **onlyAdmin**: a modifier that restricts access to certain functions to admins only.

## Functions
The contract has the following functions:
  **setNewContract**

  ```ruby function setNewContract(address _artist,address _contractAddress,string memory ipfsHashAbi) public onlyAdmin(msg.sender) returns (bool) ```

  Allows an admin to add a new contract for an artist.

  . **'_artist'**: The address of the artist.
  . **'_contractAddress'**: The address of the contract to be added.
  . **'ipfsHashAbi'**: The IPFS hash for the contract's ABI.
 Returns **'true'** if the contract was added successfully.

 **setNewArtist**

 ```rubyfunction setNewArtist(address _user, ArtistType _artistType, bytes32 _name, bytes32 _email, bytes memory _media) external onlyAdmin(msg.sender)```

 Used by the admin to add a new artist to the platform.

  . **'_user'**: The address of the new artist.
  . **'_artistType'**: The type of the artist.
  . **'_name'**: The name of the artist.
  . **'_email'**: The email of the artist.
  . **'_media'**: An array of media associated with the artist.

**setCollectionType**

```rubyfunction setCollectionType(uint8 _type, address _artist, address _contract) public onlyAdmin(msg.sender) returns (bool)```
Used by the admin to set the collection type for a given contract address and artist.

. **'_type'**: The type of the collection.
. **'_artist'**: The address of the artist associated with the collection.
. **'_contract'**: The address of the contract associated with the collection.
  Returns **'true'** if the collection type was set successfully.

**setNewCollection**

```rubyfunction setNewCollection(address _user, uint8 _artistType, uint8 _collectionType, bytes32 _collectionName, bytes[] memory _banners, bytes memory _description, address _contractAddress) external onlyAdmin(msg.sender) returns (bool)```

Allows an admin to add a new collection.

. **'_user'**: The value that contains the artist's address.
. **'_artistType'**: The value that contains the type of artist.
. **'_collectionType'**: The value that contains the type of the collection.
. **'_collectionName'**: The value that contains name of collection.
. **'_banners'**: The value that contains the link to image for banner.
. **'_description'**: The value that contains the description of collection.
. **'_contractAddress'**: The value that contains the contract's address.

Returns true if the collection was added successfully.

**editCollection**
```rubyfunction editCollection(bytes[] memory _banners, bytes memory _description, address _artist, address _contract) public returns (bool)```

This function is used to edit the data of a collection, including banners and description. It can only be called by the contract owner or the artist. The function takes the following parameters:
. **bytes[] memory _banners** - An array of bytes representing the new banners for the collection.
. **bytes memory _description** - The new description for the collection.
. **address _artist** - The address of the artist associated with the collection.
. **address _contract** - The address of the contract associated with the collection.

**editArtistInfo**

This function allows an artist to edit their profile information. It can only be called by the contract owner or the artist. The function takes the following parameters:

. **address _artist** - The artist's address
. **bytes32 _name** - The new name for the artist
. **bytes memory** _avatar - The new avatar for the artist
. **bytes memory** _bio - The new bio for the artist

**editArtistMedia**

This function allows an artist to edit their media information. It can only be called by the contract owner or the artist. The function takes the following parameters:

. **address _artist** - The artist's address
. **bytes32 _email** - The new email for the artist
. **bytes memory _media** - The new media information for the artist
