export const pitcherContractAbi = [
  {
    inputs: [{ internalType: "address", name: "_factory", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "investorId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposalUser",
        type: "address",
      },
    ],
    name: "NewProposalAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "vote", type: "bool" },
      {
        indexed: false,
        internalType: "bool",
        name: "isExecuted",
        type: "bool",
      },
    ],
    name: "ProposalVoted",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "investorId", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "isNative", type: "bool" },
      {
        internalType: "uint256",
        name: "profitAmountEstimation",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "investmentTokenAddress",
        type: "address",
      },
      { internalType: "uint256", name: "initialInvestment", type: "uint256" },
      {
        internalType: "uint256",
        name: "profitPercentageAmount",
        type: "uint256",
      },
    ],
    name: "createProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      { internalType: "contract InvestorContract", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "proposalId", type: "uint256" },
      { internalType: "bool", name: "vote", type: "bool" },
    ],
    name: "voteForProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
