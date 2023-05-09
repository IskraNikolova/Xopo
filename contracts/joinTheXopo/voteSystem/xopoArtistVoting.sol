// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./XOPOToken.sol";
import "./../utils/math/SafeMath.sol";
import "./modifiers.sol";

interface IAplication{
    /**
    * @dev Adds a candidate to the list of candidates that are open for voting.
    * @param _candidate The address of the candidate to be added.
    */
    function addCandidateforVote(address _candidate) external;
}

// This contract allows XOPO token holders to vote for or against candidates
// who have been submitted for consideration.
contract xopoArtistVoting is Modifiers {
    using SafeMath for uint256;
    
    IAplication private application;

    // The number of XOPO tokens required to cast a single vote.
    uint256 public VOTE_WEIGHT = 100;

    // The maximum number of XOPO tokens that can be used for a single vote.
    uint256 public MAX_XOPO_FOR_VOTE = 1000;

    // A struct that represents a vote, with fields 
    // the time at which they were submitted,
    // and voting oeriod of them.
    struct Vote {
        uint votingPeriod;
        uint256 submissionTime;
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

    // An event that is emitted when a voter casts a vote.
    event AddedCandidate(address candidate, uint submissionTime, uint votingPeriod);

    // The constructor that initializes the XOPO ERC20 token contract.
    constructor(address _tokenAddress, address _app) {
        XOPO = XOPOToken(_tokenAddress);
        application = IAplication(_app);
    }

    /**
    * @dev Added a candidate to contract.
    * @param _candidate The address of the candidate being added for.
    * @param _votingPeriod The voting period.
    */
    function addCandidate (
        address _candidate,
        uint256 _votingPeriod)
        public onlyAdmin(msg.sender) {

        // Create a new Vote struct and initialize its fields.
        Vote memory vote = Vote({
            votingPeriod: _votingPeriod * 1 days,
            submissionTime: block.timestamp
        });
        
        // Add the candidate to the candidates mapping.
        candidateVotes[_candidate] = vote;

        application.addCandidateforVote(_candidate);

        emit AddedCandidate(_candidate, block.timestamp, _votingPeriod);

    }

    /**
    * @dev Allows a voter to cast a votes for or against a candidate.
    * @param _candidate The address of the candidate being voted for.
    * @param _amount The amount of XOPO being used to vote.
    * @param _inFavor A boolean indicating whether the voter is voting in favor of the candidate.
    */
    function voteForArtist(
        address _candidate,
        uint256 _amount,
        bool _inFavor) public {

        // Check that voting is still open for this candidate.
        require(isVotingEnded(candidateVotes[_candidate].votingPeriod),
            "Xopo Voting System: Voting has ended.");

        // The "_amount" of tokens being used to vote must be greater than or equal to a predefined constant value called.
        require(_amount >= VOTE_WEIGHT,
            "Xopo Voting System: Amount must be greater or equal to 100 XOPO");
        
         // Check that the voter has a sufficient XOPO token balance to cast a vote.
        require(XOPO.balanceOf(msg.sender) >= _amount,
            "Xopo Voting System: Insufficient XOPO balance for voting");

        // Check that the voter has not exceeded the maximum allowed vote weight.
        require(userVoteWeight[msg.sender][_candidate].add(_amount) <= MAX_XOPO_FOR_VOTE,
            "Xopo Vote System: Maximum XOPO for vote exceeded");
        
        // The XOPO.burnFrom function is called to burn the XOPO's
        bytes memory payload = abi
            .encodeWithSignature("XOPO.burnFrom(address, uint256)", msg.sender, _amount);
        (bool success, ) = address(XOPO).call(payload);
        require(success);

        uint256 votes = _amount.div(VOTE_WEIGHT);

        //Added votes to candidate
        candidateVoteTallies[_candidate][_inFavor] = 
            candidateVoteTallies[_candidate][_inFavor].add(votes);


        // Increase the voter's vote weight for this candidate by
        // the amount of XOPO tokens they are using to vote.
        userVoteWeight[msg.sender][_candidate] =
            userVoteWeight[msg.sender][_candidate].add(_amount);

        // VotedForArtist event is emitted to record the vote.
        emit VotedForArtist(msg.sender, _candidate, _inFavor);
    }

    /**
    * @dev Checks whether the voting period for a candidate is active.
    * @param _candidate The address of the candidate.
    * @return timeLeft The time left, specified as a Unix timestamp in seconds.
    * @return votingActive A boolean value indicating whether the voting period has ended (false) or not (true).
    **/
    function isVotingActiveByAddress(address _candidate)
        public view returns (uint timeLeft, bool votingActive) {
        uint deadline = block.timestamp.add(candidateVotes[_candidate].votingPeriod);

        timeLeft = deadline.sub(candidateVotes[_candidate].submissionTime);
        votingActive = timeLeft > 0;
    }

    /**
    * @dev Checks whether the voting period has ended.
    * @param _votingPeriod the voting period, specified as a Unix timestamp in seconds.
    * @return votingEnded A boolean value indicating whether the voting period has ended (true) or not (false).
    **/
    function isVotingEnded (uint _votingPeriod)
        internal
        view
        returns (bool votingEnded) {
        votingEnded = block.timestamp <=
            block.timestamp.add(_votingPeriod);
    }
}