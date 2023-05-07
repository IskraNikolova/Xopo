// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./XOPOToken.sol";
import "./../utils/math/SafeMath.sol";
import "./modifiers.sol";

// This contract allows XOPO token holders to vote for or against candidates
// who have been submitted for consideration.
contract xopoArtistVoting is Modifiers {
    using SafeMath for uint256;

    // The number of XOPO tokens required to cast a single vote.
    uint256 public VOTE_WEIGHT = 100;

    // The maximum number of XOPO tokens that can be used for a single vote.
    uint256 public MAX_XOPO_FOR_VOTE = 1000;

    // The duration of time that each candidate is eligible to receive votes.
    uint public votePeriod;

    // A struct that represents a vote, with fields 
    // the time at which they were submitted,
    // and the deadline for voting on them.
    struct Vote {
        uint256 submissionTime;
        uint256 deadline;
    }

    // A mapping from candidate addresses to their corresponding Vote structs.
    mapping(address => Vote) public candidateVotes;

    // A mapping from candidate addresses to their corresponding vote tallies.
    // The inner mapping maps true/false to the number of votes received for that candidate.
    mapping(address => mapping(bool => uint256)) public candidateVoteTallies;

    // A mapping from voter addresses to candidate addresses to the number of
    // votes that they have cast.
    mapping(address => mapping(address => uint256)) public userVoteWeight;
    
    // The XOPO ERC20 token contract.
    XOPOToken public XOPO;

    // An event that is emitted when a voter casts a vote.
    event VotedForArtist(address voter, address candidate, bool inFavor);

    // The constructor that initializes the XOPO ERC20 token contract.
    constructor(
        address _tokenAddress,
        uint _period) {
        XOPO = XOPOToken(_tokenAddress);
        votePeriod = _period * 1 days;
    }

    /**
    * @dev Added a candidate to contract.
    * @param _candidate The address of the candidate being added for.
    */
    function addCandidate (address _candidate)
        public onlyAdmin(msg.sender) {

        // Create a new Vote struct and initialize its fields.
        Vote memory vote = Vote({ 
            submissionTime: block.timestamp,
            deadline: block.timestamp.add(votePeriod)
        });
        
        // Add the candidate to the candidates mapping.
        candidateVotes[_candidate] = vote;
    }

     /**
     * @dev Sets the duration of the voting period.
     * @param _period The length of the voting period, specified as a duration in days.
     * @notice This function can only be called by the contract admin.
     * @notice The duration will be converted to seconds and stored as an integer value.
     */
    function setVotePeriod(uint _period)
        public onlyAdmin(msg.sender) {
        votePeriod = _period * 1 days;
    }


    /**
    * @dev Allows a voter to cast a vote for or against a candidate.
    * @param _candidate The address of the candidate being voted for.
    * @param _amount The amount of XOPO being used to vote.
    * @param _inFavor A boolean indicating whether the voter is voting in favor of the candidate.
    */
    function voteForArtist(
        address _candidate,
        uint256 _amount,
        bool _inFavor) public {

        // Check that voting is still open for this candidate.
        require(isVotingEnded(candidateVotes[_candidate].deadline),
            "Xopo Voting System: Voting has ended.");

        // Check that the voter has a sufficient XOPO token balance to cast a vote.
        require(XOPO.balanceOf(msg.sender) >= VOTE_WEIGHT,
            "Xopo Voting System: Insufficient XOPO balance for voting");

        // Check that the voter has not exceeded the maximum allowed vote weight.
        require(userVoteWeight[msg.sender][_candidate].add(_amount) <= MAX_XOPO_FOR_VOTE,
            "Xopo Vote System: Maximum XOPO for vote exceeded");

        //Added votes to candidate
        candidateVoteTallies[_candidate][_inFavor] = 
            candidateVoteTallies[_candidate][_inFavor].add(1);

        // The XOPO.burn(amount) function is called to burn
        // the XOPO's, and the Voted event is emitted to record the vote.
        XOPO.burn(_amount);

        // Increase the voter's vote weight for this candidate by
        // the amount of XOPO tokens they are using to vote.
        userVoteWeight[msg.sender][_candidate] =
            userVoteWeight[msg.sender][_candidate].add(_amount);
        
        emit VotedForArtist(msg.sender, _candidate, _inFavor);
    }

    /**
    @dev Checks whether the voting period for a candidate has ended.
    @param _deadline The deadline for the voting period, specified as a Unix timestamp in seconds.
    @return votingEnded A boolean value indicating whether the voting period has ended (true) or not (false).
    **/
    function isVotingEnded (uint256 _deadline)
        public
        view
        returns (bool votingEnded) {
        votingEnded = block.timestamp <= _deadline;
    }
}