export const investorcontractabi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "investorId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "investor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "NewInvestmentListed",
    type: "event",
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
        name: "newInvestor",
        type: "address",
      },
    ],
    name: "NewInvestorAdded",
    type: "event",
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
        name: "removedInvestor",
        type: "address",
      },
    ],
    name: "RemovedInvestor",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "investorId", type: "uint256" },
      { internalType: "address payable", name: "newInvestor", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "addNewInvestor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenAddress", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "checkApproval",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "investorId", type: "uint256" }],
    name: "checkTokenAddress",
    outputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "investor", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "investor", type: "address" },
      { internalType: "uint256", name: "investorId", type: "uint256" },
    ],
    name: "getBalanceOfInvestor",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "investorId", type: "uint256" }],
    name: "getInvestorAddresses",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "investorId", type: "uint256" }],
    name: "getTotalInvestors",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "investors",
    outputs: [
      { internalType: "address", name: "investor", type: "address" },
      { internalType: "address", name: "tokenAddress", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "investorId", type: "uint256" },
      { internalType: "address", name: "addr", type: "address" },
    ],
    name: "isInvestor",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "tokenName", type: "string" },
      { internalType: "string", name: "tokenSymbol", type: "string" },
    ],
    name: "listNewInvestor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "investorId", type: "uint256" },
      { internalType: "address", name: "removeAddress", type: "address" },
    ],
    name: "removeInvestor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
