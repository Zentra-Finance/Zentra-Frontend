export const BASIC_TOKEN_ABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "name_",
        type: "string",
        internalType: "string",
      },
      {
        name: "symbol_",
        type: "string",
        internalType: "string",
      },
      {
        name: "decimals_",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "totalSupply_",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "DEPLOYMENT_KEY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "allowance",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "needed",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
      {
        name: "balance",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "needed",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [
      {
        name: "approver",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
];

export const BASIC_TOKEN_BYTECODE =
  "0x608080604052610d8680380380916100178285610550565b83398101906080818303126102c05780516001600160401b0381116102c0578261004291830161058e565b602082015190926001600160401b0382116102c05761006291830161058e565b9060408101519060ff821682036102c0576060015183519091906001600160401b03811161046157600354600181811c91168015610546575b602082101461044357601f81116104e3575b50602094601f8211600114610480579481929394955f92610475575b50508160011b915f199060031b1c1916176003555b82516001600160401b03811161046157600454600181811c91168015610457575b602082101461044357601f81116103e0575b506020601f821160011461037d57819293945f92610372575b50508160011b915f199060031b1c1916176004555b331561035f5760058054336001600160a01b0319821681179092556040519092916001600160a01b0384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a36331d98b3f60e01b81527fc1283260e535c8335304213599c7f410fac47568451730554b5e5446b0800b306004820152602081602481739a76954a5b317afcc9ec85070515b2273a8c33955afa908115610354575f91610322575b5034106102dd576001600160a81b03199091163360ff60a01b19161760a09190911b60ff60a01b161760055560068190556002548082019081106102c957600255335f525f60205260405f208181540190556040519081525f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203393a35f80808034739a76954a5b317afcc9ec85070515b2273a8c33955af13d156102c4573d61029481610573565b906102a26040519283610550565b81525f60203d92013e5b156102c0576040516107b190816105d58239f35b5f80fd5b6102ac565b634e487b7160e01b5f52601160045260245ffd5b60405162461bcd60e51b815260206004820152601a60248201527f5365727669636520666565206973206e6f7420656e6f756768210000000000006044820152606490fd5b90506020813d60201161034c575b8161033d60209383610550565b810103126102c057515f6101e9565b3d9150610330565b6040513d5f823e3d90fd5b631e4fbdf760e01b5f525f60045260245ffd5b015190505f8061012a565b601f1982169060045f52805f20915f5b8181106103c8575095836001959697106103b0575b505050811b0160045561013f565b01515f1960f88460031b161c191690555f80806103a2565b9192602060018192868b01518155019401920161038d565b60045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c81019160208410610439575b601f0160051c01905b81811061042e5750610111565b5f8155600101610421565b9091508190610418565b634e487b7160e01b5f52602260045260245ffd5b90607f16906100ff565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100c9565b601f1982169560035f52805f20915f5b8881106104cb575083600195969798106104b3575b505050811b016003556100de565b01515f1960f88460031b161c191690555f80806104a5565b91926020600181928685015181550194019201610490565b60035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c8101916020841061053c575b601f0160051c01905b81811061053157506100ad565b5f8155600101610524565b909150819061051b565b90607f169061009b565b601f909101601f19168101906001600160401b0382119082101761046157604052565b6001600160401b03811161046157601f01601f191660200190565b81601f820112156102c0578051906105a582610573565b926105b36040519485610550565b828452602083830101116102c057815f9260208093018386015e830101529056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f3560e01c90816306fdde031461057257508063095ea7b3146104f05780630af5525c146104b657806318160ddd1461049957806323b872dd146103ba578063313ce5671461039757806370a0823114610360578063715018a6146103055780638da5cb5b146102dd57806395d89b41146101c2578063a9059cbb14610191578063dd62ed3e146101415763f2fde38b146100b7575f61000f565b3461013d57602036600319011261013d576100d061066b565b6100d8610754565b6001600160a01b0316801561012a57600580546001600160a01b0319811683179091556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b631e4fbdf760e01b5f525f60045260245ffd5b5f80fd5b3461013d57604036600319011261013d5761015a61066b565b610162610681565b6001600160a01b039182165f908152600160209081526040808320949093168252928352819020549051908152f35b3461013d57604036600319011261013d576101b76101ad61066b565b6024359033610697565b602060405160018152f35b3461013d575f36600319011261013d576040515f6004548060011c906001811680156102d3575b6020831081146102bf578285529081156102a3575060011461024e575b50819003601f01601f191681019067ffffffffffffffff82118183101761023a5761023682918260405282610641565b0390f35b634e487b7160e01b5f52604160045260245ffd5b905060045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5f905b82821061028d57506020915082010182610206565b6001816020925483858801015201910190610278565b90506020925060ff191682840152151560051b82010182610206565b634e487b7160e01b5f52602260045260245ffd5b91607f16916101e9565b3461013d575f36600319011261013d576005546040516001600160a01b039091168152602090f35b3461013d575f36600319011261013d5761031d610754565b600580546001600160a01b031981169091555f906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b3461013d57602036600319011261013d576001600160a01b0361038161066b565b165f525f602052602060405f2054604051908152f35b3461013d575f36600319011261013d57602060ff60055460a01c16604051908152f35b3461013d57606036600319011261013d576103d361066b565b6103db610681565b6001600160a01b0382165f818152600160209081526040808320338452909152902054909260443592915f198110610419575b506101b79350610697565b83811061047e57841561046b573315610458576101b7945f52600160205260405f2060018060a01b0333165f526020528360405f20910390558461040e565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b8390637dc7a0d960e11b5f523360045260245260445260645ffd5b3461013d575f36600319011261013d576020600654604051908152f35b3461013d575f36600319011261013d5760206040517fc1283260e535c8335304213599c7f410fac47568451730554b5e5446b0800b308152f35b3461013d57604036600319011261013d5761050961066b565b60243590331561046b576001600160a01b031690811561045857335f52600160205260405f20825f526020528060405f20556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b3461013d575f36600319011261013d575f6003548060011c90600181168015610637575b6020831081146102bf578285529081156102a357506001146105e25750819003601f01601f191681019067ffffffffffffffff82118183101761023a5761023682918260405282610641565b905060035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5f905b82821061062157506020915082010182610206565b600181602092548385880101520191019061060c565b91607f1691610596565b602060409281835280519182918282860152018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361013d57565b602435906001600160a01b038216820361013d57565b6001600160a01b0316908115610741576001600160a01b031691821561072e57815f525f60205260405f205481811061071557817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f525f825260405f20818154019055604051908152a3565b8263391434e360e21b5f5260045260245260445260645ffd5b63ec442f0560e01b5f525f60045260245ffd5b634b637e8f60e11b5f525f60045260245ffd5b6005546001600160a01b0316330361076857565b63118cdaa760e01b5f523360045260245ffdfea2646970667358221220390b97628ccfea43db583b3ae0202df19220af0f05297f7324c4d54b420bd74764736f6c634300081c0033";

export const TAX_TOKEN_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
      {
        internalType: "uint24",
        name: "buyFee_",
        type: "uint24",
      },
      {
        internalType: "uint24",
        name: "sellFee_",
        type: "uint24",
      },
      {
        internalType: "address payable",
        name: "taxReceiver_",
        type: "address",
      },
      {
        internalType: "address",
        name: "pancakeRouter_",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "serviceFeeReceiver_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "serviceFee_",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_pancakePair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_pancakeRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_taxReceiver",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "automatedMarketMakerPairs",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "setAutomatedMarketMakerPair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mainRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_baseTokenForMarket",
        type: "address",
      },
    ],
    name: "updateMainPair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "_sellTaxFee",
        type: "uint24",
      },
      {
        internalType: "uint24",
        name: "_buyTaxFee",
        type: "uint24",
      },
    ],
    name: "updateTaxFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "taxReceiver_",
        type: "address",
      },
    ],
    name: "updateTaxReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

export const TAX_TOKEN_BYTECODE =
  "60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea26469706673582212204334eac42563b6a6a9fb578238c7bc6a1a2865a9c7aaab52ed8474c98398027764736f6c634300081d0033";

export const ADVANCED_TOKEN_ABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "args",
        type: "tuple",
        internalType: "struct AdvancedToken.Args",
        components: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "symbol",
            type: "string",
            internalType: "string",
          },
          {
            name: "_decimals",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "_totalSupply",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "_serviceFeeReceiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "_taxReceiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "maxTransaction",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "maxWallet",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "buyFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "sellFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "dexType",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "dexRouter",
            type: "address",
            internalType: "address",
          },
          {
            name: "rewardToken",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "buyReward",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "sellReward",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "lpBuyFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "lpSellFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "buyBurnPercent",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "sellBurnPercent",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "serviceFee",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "automatedMarketMakerPairs",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "dexRouter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "dexType",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mainPair",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "onERC721Received",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "rewardToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setAutomatedMarketMakerPair",
    inputs: [
      {
        name: "pair",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setWhiteList",
    inputs: [
      {
        name: "_addr",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateBurnFee",
    inputs: [
      {
        name: "_buyBurnFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_sellBurnFee",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateLpFee",
    inputs: [
      {
        name: "_lpBuyFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_lpSellFee",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateMaxTransaction",
    inputs: [
      {
        name: "_maxTransaction",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateMaxWallet",
    inputs: [
      {
        name: "_maxWallet",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateRewardFee",
    inputs: [
      {
        name: "_buyRewardFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_sellRewardFee",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateTaxFee",
    inputs: [
      {
        name: "_buyTaxFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_sellTaxFee",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateTaxReceiver",
    inputs: [
      {
        name: "taxReceiver_",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "whiteList",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdrawETH",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawToken",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "allowance",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "needed",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
      {
        name: "balance",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "needed",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [
      {
        name: "approver",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
  },
];

export const ADVANCED_TOKEN_BYTECODE =
  "0x60808060405261092480380380916100178285610897565b8339810190602081830312610893578051906001600160401b03821161089357610280828201840312610893576040519261028084016001600160401b038111858210176107a457604052818301516001600160401b038111610893578161008291858501016108ba565b845281830160200151906001600160401b038211610893576100a791848401016108ba565b91826020850152604081830101519160ff83168303610893576102609260408601526060828201015160608601526100e360808383010161090f565b60808601526100f660a08383010161090f565b60a086015280820160c0818101519087015260e08082015190870152610100808201519087015261012080820151908701526101408082015190870152610140906101600161090f565b6101608601520161018081810151908501526101a080820151908501526101c080820151908501526101e080820151908501526102008082015190850152610220808201519085015261024080820151908501520151610260830190815282518051909391906001600160401b0381116107a457600354600181811c91168015610889575b602082101461078657601f8111610826575b50602094601f82116001146107c3579481929394955f926107b8575b50508160011b915f199060031b1c1916176003555b82516001600160401b0381116107a457600454600181811c9116801561079a575b602082101461078657601f8111610723575b506020601f82116001146106c057819293945f926106b5575b50508160011b915f199060031b1c1916176004555b33156106a2576005546040519190336001600160a01b0382167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a360408401516001600160a81b03199091163360ff60a01b19161760a09190911b60ff60a01b161760055560608301516006556080830151600780546001600160a01b0319166001600160a01b0392909216919091179055513410610660575060018060a01b0360a08201511660018060a01b0319600854161760085560c081015160095560e0810151600a5561010081015180600b556101208201519182600c55610140810151600d5560018060a01b0361016082015116928360018060a01b0319600e541617600e55610180820151600f556101a0820151806010556101c0830151806011556101e08401519182601255610200850151938460135562030d4061024061022088015197886014550151978860155511159081610652575b50156106025762030d40101590816105f4575b50156105a15762030d4010159081610593575b50156105365762030d4010159081610528575b50156104d05730156104bd5780156104aa57305f52600160205260405f20815f5260205260405f205f1990556040515f1981527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203092a360405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b60405162461bcd60e51b815260206004820152602a60248201527f4275726e696e672070657263656e742063616e27742062652067726561746572604482015269207468616e203230252160b01b6064820152608490fd5b62030d40915011155f6103fe565b60405162461bcd60e51b815260206004820152602f60248201527f4c697175696469747920616464696e67206665652063616e277420626520677260448201526e6561746572207468616e203230252160881b6064820152608490fd5b62030d40915011155f6103eb565b60405162461bcd60e51b815260206004820152602560248201527f526577617264206665652063616e27742062652067726561746572207468616e604482015264203230252160d81b6064820152608490fd5b62030d40915011155f6103d8565b60405162461bcd60e51b815260206004820152602260248201527f546178206665652063616e27742062652067726561746572207468616e203230604482015261252160f01b6064820152608490fd5b62030d40915011155f6103c5565b62461bcd60e51b815260206004820152601a60248201527f5365727669636520666565206973206e6f7420656e6f756768210000000000006044820152606490fd5b631e4fbdf760e01b5f525f60045260245ffd5b015190505f80610254565b601f1982169060045f52805f20915f5b81811061070b575095836001959697106106f3575b505050811b01600455610269565b01515f1960f88460031b161c191690555f80806106e5565b9192602060018192868b0151815501940192016106d0565b60045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c8101916020841061077c575b601f0160051c01905b818110610771575061023b565b5f8155600101610764565b909150819061075b565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610229565b634e487b7160e01b5f52604160045260245ffd5b015190505f806101f3565b601f1982169560035f52805f20915f5b88811061080e575083600195969798106107f6575b505050811b01600355610208565b01515f1960f88460031b161c191690555f80806107e8565b919260206001819286850151815501940192016107d3565b60035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c8101916020841061087f575b601f0160051c01905b81811061087457506101d7565b5f8155600101610867565b909150819061085e565b90607f16906101c5565b5f80fd5b601f909101601f19168101906001600160401b038211908210176107a457604052565b81601f82011215610893578051906001600160401b0382116107a457604051926108ee601f8401601f191660200185610897565b8284526020838301011161089357815f9260208093018386015e8301015290565b51906001600160a01b03821682036108935756fe";

export const ZENTRA_ROUTER_ADDRESS =
  "0xe1CB270f0C7C82dA9E819A4cC2bd43861F550C4F";

export const ZENTRA_V3_ROUTER_ADDRESS =
  "0xD0AAe88AF22dAE89CCF46D9033C2dB6eBf4B87F0";
