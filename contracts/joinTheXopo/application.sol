// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "./../utils/math/SafeMath.sol";
import "./artistStructs.sol";
import "./admins.sol";

interface ArtistsProfileInterface {
    function setNewArtist(ArtistStructures.InitArtistStruct memory _initStruct) external returns (bool);
}


contract Application is Admins, ArtistStructures {
    using SafeMath for uint256;
    uint internal twoWeeks = 2 weeks;

    ArtistsProfileInterface private artistProfilesI;

    // Mapping of candidate addresses to their candidate data.
    mapping (address => Candidate) public candidate;

    // Mapping of approved artist addresses.
    mapping (address => bool) public isApproved;

    // Mapping of positive votes received by candidates.
    mapping (address => uint) public positiveVote;

    // Array of all candidate addresses.
    address[] private allCandidates;

    // Event emitted when an artist is approved.
    event Approved(address _user, Candidate candidate);

    // Event emitted when a new candidate is added.
    event NewCandidate(address _user, Candidate candidate);
 
    /**
     * @dev Set the address of the ArtistsProfileInterface contract.
     * @param _artistProfilesI Address of the ArtistsProfileInterface contract.
     */
    function setArtistProfiles (address _artistProfilesI)
        public
        onlyAuthorized(msg.sender) {
        artistProfilesI = ArtistsProfileInterface(_artistProfilesI);
    }

    /**
     * @dev Vote to approve a candidate artist.
     * @param _user Address of the candidate artist.
     * @return isApprove Returns true if the artist is approved.
     */
    function vote (address _user)
        public
        onlyAdmin(msg.sender)
        returns (bool isApprove) {

        isApprove = false;
        positiveVote[_user] = positiveVote[_user]
            .add(1);

        uint positiveVotesRequirement = adminsCount
            .div(2);
        if (positiveVote[_user] > positiveVotesRequirement) {
            isApproved[_user] = true;

            InitArtistStruct memory _initStruct = InitArtistStruct(
                candidate[_user].artistType,
                _user,
                candidate[_user].name,
                candidate[_user].email,
                candidate[_user].urls,
                candidate[_user].media
            );

            artistProfilesI.setNewArtist(_initStruct);
            //  artistProfilesI.call(abi.encodeWithSignature("setNewArtist(_initStruct)"));
            emit Approved (_user, candidate[_user]);

            isApprove = true;
        }
    }
    
    /**
    * @dev Get the array of all candidate addresses.
    * @return Array of all candidate addresses.
    */
    function getCandidates ()
        public
        view
        returns (address[] memory) {
        return allCandidates;
    }
    
     /**
     * @dev Add a new candidate artist.
     * @param _typeOfArtist Type of the artist.
     * @param _name Name of the artist.
     * @param _age Age of the artist.
     * @param _email Email of the artist.
     * @param _collectionName Name of the collection.
     * @param _urls Array of URLs related to the artist.
     * @param _media Media related to the artist.
     * @param _isAcceptTerms Whether the artist accepts the terms.
     */
    function setCandidate (
		uint _typeOfArtist,
        bytes32 _name,
        uint _age,
        bytes32 _email,
        bytes32 _collectionName,
		bytes32[] memory _urls,
        bytes memory _media,
        bool _isAcceptTerms)
        public {
            uint deadline = block.timestamp + twoWeeks;
            Candidate memory _candidate = Candidate(
    			msg.sender,
    			ArtistType(_typeOfArtist),
    			_name,
    			_age,
                _email,
    			_collectionName,
    			_urls,
                _media,
                _isAcceptTerms,
                deadline);
            candidate[msg.sender] = _candidate;
            allCandidates.push(msg.sender);
            emit NewCandidate(msg.sender, _candidate);
    }

    function isActive (address _userAddress)
        public 
        view returns (bool isActiveUser){
        return candidate[_userAddress].deadline <= block.timestamp;
    }
}
