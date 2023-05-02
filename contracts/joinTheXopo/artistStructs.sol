// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

contract ArtistStructures {
    enum ArtistType { painting, music, other }

    struct InitArtistStruct {
		ArtistType artistType;
        address user;
        bytes32 name;
        bytes32 email;
		bytes32[] urls;
        bytes media;
	}

	struct ArtistStruct {
        address user;
		ArtistType artistType;
        bytes32 name;
        bytes avatar;
        bytes banner;
        bytes bio;
        bytes32 email;
		bytes32[] urls;
        bytes media;
	}

    struct CollectionStruct {
		ArtistType artistType;
        bytes32 collectionName;
        bytes banner;
        bytes description;
	}

    struct Candidate {
		address user;
		ArtistType artistType;
        bytes32 name;
        uint age;
        bytes32 email;
        bytes32 collectionName;
		bytes32[] urls;
        bytes media;
        bool isAcceptTerms;
        uint deadline;
	}
}