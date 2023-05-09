// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

contract XopoStructures {
    enum ArtistType { painting, music, other }
    enum CollectionType { comming, streaming, completed }

	struct ArtistStruct {
		ArtistType artistType;
        bytes32 name;
        bytes avatar;
        bytes banner;
        bytes bio;
        bytes32 email;
        bytes media;
	}

    struct CollectionStruct {
		ArtistType artistType;
        CollectionType collectionType;
        bytes32 collectionName;
        bytes[] banners;
        bytes description;
	}

    struct Candidate {
		ArtistType artistType;
        bytes32 name;
        uint age;
        bytes32 email;
		bytes urls;
        bytes media;
	}
}