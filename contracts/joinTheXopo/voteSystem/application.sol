// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "./../utils/math/SafeMath.sol";
import "./xopoStructs.sol";
import "./modifiers.sol";

contract Application is Modifiers, XopoStructures {
    using SafeMath for uint256;

    // Mapping of candidate addresses to their candidate data.
    mapping (address => Candidate) public candidate;

    // Define a mapping variable called `candidatesVotedFor`,
    // which maps a boolean value to a list of candidate addresses.
    mapping (bool => address[]) public candidatesVotedFor;

    // Event emitted when a new candidate is added.
    event NewCandidate(address _user, Candidate candidate);

    /**
    * @dev Event emitted when a vote is open for candidate.
    */
    event VoteOpen(address _candidate);

    /**
    * @dev Adds a candidate to the list of candidates that are open for voting.
    * @param _candidate The address of the candidate to be added.
    */
    function getCandidateforVote (address _candidate)
        external {
            candidatesVotedFor[true].push(_candidate);
            emit VoteOpen(_candidate);
    }
 
    /**
    * @dev Get the array of all candidate addresses.
    * @return Array of all candidate addresses.
    */
    function getCandidateAddresses ()
        public
        view
        returns (address[] memory) {
        return candidatesVotedFor[false];
    }
    
     /**
     * @dev Add a new candidate artist.
     * @param _typeOfArtist Type of the artist.
     * @param _name Name of the artist.
     * @param _age Age of the artist.
     * @param _email Email of the artist.
     * @param _urls Array of URLs related to the artist.
     * @param _media Media related to the artist.
     */
    function setCandidate (
		uint8 _typeOfArtist,
        bytes32 _name,
        uint _age,
        bytes32 _email,
		bytes memory _urls,
        bytes memory _media)
        public {
            Candidate memory _candidate = Candidate(
    			msg.sender,
    			ArtistType(_typeOfArtist),
    			_name,
    			_age,
                _email,
    			_urls,
                _media);
            candidate[msg.sender] = _candidate;
            candidatesVotedFor[false].push(msg.sender);

            emit NewCandidate(msg.sender, _candidate);
    }
}
