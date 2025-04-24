export const BASIC_TOKEN_ABI = [
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
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
        name: "value",
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
        name: "value",
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
        name: "value",
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
    stateMutability: "payable",
    type: "receive",
  },
];

export const BASIC_TOKEN_BYTECODE =
  "0x6080604052604051611fb3380380611fb38339818101604052810190610025919061082e565b33868681600390816100379190610b0a565b5080600490816100479190610b0a565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100bc5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100b39190610bfd565b60405180910390fd5b6100cb8161027960201b60201c565b508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361013a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161013190610c9b565b60405180910390fd5b8034101561017d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017490610d07565b60405180910390fd5b83600560146101000a81548160ff021916908360ff1602179055508260068190555081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806008819055506101f7338461033f60201b60201c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405161021d90610d58565b60006040518083038185875af1925050503d806000811461025a576040519150601f19603f3d011682016040523d82523d6000602084013e61025f565b606091505b505090508061026d57600080fd5b50505050505050610e31565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036103b15760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016103a89190610bfd565b60405180910390fd5b6103c3600083836103c760201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361041957806002600082825461040d9190610d9c565b925050819055506104ec565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156104a5578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161049c93929190610ddf565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105355780600260008282540392505081905550610582565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105df9190610e16565b60405180910390a3505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106538261060a565b810181811067ffffffffffffffff821117156106725761067161061b565b5b80604052505050565b60006106856105ec565b9050610691828261064a565b919050565b600067ffffffffffffffff8211156106b1576106b061061b565b5b6106ba8261060a565b9050602081019050919050565b60005b838110156106e55780820151818401526020810190506106ca565b60008484015250505050565b60006107046106ff84610696565b61067b565b9050828152602081018484840111156107205761071f610605565b5b61072b8482856106c7565b509392505050565b600082601f83011261074857610747610600565b5b81516107588482602086016106f1565b91505092915050565b600060ff82169050919050565b61077781610761565b811461078257600080fd5b50565b6000815190506107948161076e565b92915050565b6000819050919050565b6107ad8161079a565b81146107b857600080fd5b50565b6000815190506107ca816107a4565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107fb826107d0565b9050919050565b61080b816107f0565b811461081657600080fd5b50565b60008151905061082881610802565b92915050565b60008060008060008060c0878903121561084b5761084a6105f6565b5b600087015167ffffffffffffffff811115610869576108686105fb565b5b61087589828a01610733565b965050602087015167ffffffffffffffff811115610896576108956105fb565b5b6108a289828a01610733565b95505060406108b389828a01610785565b94505060606108c489828a016107bb565b93505060806108d589828a01610819565b92505060a06108e689828a016107bb565b9150509295509295509295565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061094557607f821691505b602082108103610958576109576108fe565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026109c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610983565b6109ca8683610983565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610a07610a026109fd8461079a565b6109e2565b61079a565b9050919050565b6000819050919050565b610a21836109ec565b610a35610a2d82610a0e565b848454610990565b825550505050565b600090565b610a4a610a3d565b610a55818484610a18565b505050565b5b81811015610a7957610a6e600082610a42565b600181019050610a5b565b5050565b601f821115610abe57610a8f8161095e565b610a9884610973565b81016020851015610aa7578190505b610abb610ab385610973565b830182610a5a565b50505b505050565b600082821c905092915050565b6000610ae160001984600802610ac3565b1980831691505092915050565b6000610afa8383610ad0565b9150826002028217905092915050565b610b13826108f3565b67ffffffffffffffff811115610b2c57610b2b61061b565b5b610b36825461092d565b610b41828285610a7d565b600060209050601f831160018114610b745760008415610b62578287015190505b610b6c8582610aee565b865550610bd4565b601f198416610b828661095e565b60005b82811015610baa57848901518255600182019150602085019450602081019050610b85565b86831015610bc75784890151610bc3601f891682610ad0565b8355505b6001600288020188555050505b505050505050565b6000610be7826107d0565b9050919050565b610bf781610bdc565b82525050565b6000602082019050610c126000830184610bee565b92915050565b600082825260208201905092915050565b7f4f776e657220616e64206d61726b6574696e672077616c6c65742063616e6e6f60008201527f74206265207468652073616d6500000000000000000000000000000000000000602082015250565b6000610c85602d83610c18565b9150610c9082610c29565b604082019050919050565b60006020820190508181036000830152610cb481610c78565b9050919050565b7f5365727669636520666565206973206e6f7420656e6f75676821000000000000600082015250565b6000610cf1601a83610c18565b9150610cfc82610cbb565b602082019050919050565b60006020820190508181036000830152610d2081610ce4565b9050919050565b600081905092915050565b50565b6000610d42600083610d27565b9150610d4d82610d32565b600082019050919050565b6000610d6382610d35565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610da78261079a565b9150610db28361079a565b9250828201905080821115610dca57610dc9610d6d565b5b92915050565b610dd98161079a565b82525050565b6000606082019050610df46000830186610bee565b610e016020830185610dd0565b610e0e6040830184610dd0565b949350505050565b6000602082019050610e2b6000830184610dd0565b92915050565b61117380610e406000396000f3fe6080604052600436106100ab5760003560e01c8063715018a611610064578063715018a6146101ef5780638da5cb5b1461020657806395d89b4114610231578063a9059cbb1461025c578063dd62ed3e14610299578063f2fde38b146102d6576100b2565b806306fdde03146100b7578063095ea7b3146100e257806318160ddd1461011f57806323b872dd1461014a578063313ce5671461018757806370a08231146101b2576100b2565b366100b257005b600080fd5b3480156100c357600080fd5b506100cc6102ff565b6040516100d99190610dc7565b60405180910390f35b3480156100ee57600080fd5b5061010960048036038101906101049190610e82565b610391565b6040516101169190610edd565b60405180910390f35b34801561012b57600080fd5b506101346103b4565b6040516101419190610f07565b60405180910390f35b34801561015657600080fd5b50610171600480360381019061016c9190610f22565b6103be565b60405161017e9190610edd565b60405180910390f35b34801561019357600080fd5b5061019c6103ed565b6040516101a99190610f91565b60405180910390f35b3480156101be57600080fd5b506101d960048036038101906101d49190610fac565b610404565b6040516101e69190610f07565b60405180910390f35b3480156101fb57600080fd5b5061020461044c565b005b34801561021257600080fd5b5061021b610460565b6040516102289190610fe8565b60405180910390f35b34801561023d57600080fd5b5061024661048a565b6040516102539190610dc7565b60405180910390f35b34801561026857600080fd5b50610283600480360381019061027e9190610e82565b61051c565b6040516102909190610edd565b60405180910390f35b3480156102a557600080fd5b506102c060048036038101906102bb9190611003565b61053f565b6040516102cd9190610f07565b60405180910390f35b3480156102e257600080fd5b506102fd60048036038101906102f89190610fac565b6105c6565b005b60606003805461030e90611072565b80601f016020809104026020016040519081016040528092919081815260200182805461033a90611072565b80156103875780601f1061035c57610100808354040283529160200191610387565b820191906000526020600020905b81548152906001019060200180831161036a57829003601f168201915b5050505050905090565b60008061039c61064c565b90506103a9818585610654565b600191505092915050565b6000600654905090565b6000806103c961064c565b90506103d6858285610666565b6103e18585856106fa565b60019150509392505050565b6000600560149054906101000a900460ff16905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104546107ee565b61045e6000610875565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461049990611072565b80601f01602080910402602001604051908101604052809291908181526020018280546104c590611072565b80156105125780601f106104e757610100808354040283529160200191610512565b820191906000526020600020905b8154815290600101906020018083116104f557829003601f168201915b5050505050905090565b60008061052761064c565b90506105348185856106fa565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6105ce6107ee565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106405760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016106379190610fe8565b60405180910390fd5b61064981610875565b50565b600033905090565b610661838383600161093b565b505050565b6000610672848461053f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106f457818110156106e4578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016106db939291906110a3565b60405180910390fd5b6106f38484848403600061093b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361076c5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107639190610fe8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107de5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016107d59190610fe8565b60405180910390fd5b6107e9838383610b12565b505050565b6107f661064c565b73ffffffffffffffffffffffffffffffffffffffff16610814610460565b73ffffffffffffffffffffffffffffffffffffffff16146108735761083761064c565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161086a9190610fe8565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036109ad5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016109a49190610fe8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a1f5760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610a169190610fe8565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610b0c578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b039190610f07565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b64578060026000828254610b589190611109565b92505081905550610c37565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bf0578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610be7939291906110a3565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c805780600260008282540392505081905550610ccd565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d2a9190610f07565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d71578082015181840152602081019050610d56565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d9982610d37565b610da38185610d42565b9350610db3818560208601610d53565b610dbc81610d7d565b840191505092915050565b60006020820190508181036000830152610de18184610d8e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e1982610dee565b9050919050565b610e2981610e0e565b8114610e3457600080fd5b50565b600081359050610e4681610e20565b92915050565b6000819050919050565b610e5f81610e4c565b8114610e6a57600080fd5b50565b600081359050610e7c81610e56565b92915050565b60008060408385031215610e9957610e98610de9565b5b6000610ea785828601610e37565b9250506020610eb885828601610e6d565b9150509250929050565b60008115159050919050565b610ed781610ec2565b82525050565b6000602082019050610ef26000830184610ece565b92915050565b610f0181610e4c565b82525050565b6000602082019050610f1c6000830184610ef8565b92915050565b600080600060608486031215610f3b57610f3a610de9565b5b6000610f4986828701610e37565b9350506020610f5a86828701610e37565b9250506040610f6b86828701610e6d565b9150509250925092565b600060ff82169050919050565b610f8b81610f75565b82525050565b6000602082019050610fa66000830184610f82565b92915050565b600060208284031215610fc257610fc1610de9565b5b6000610fd084828501610e37565b91505092915050565b610fe281610e0e565b82525050565b6000602082019050610ffd6000830184610fd9565b92915050565b6000806040838503121561101a57611019610de9565b5b600061102885828601610e37565b925050602061103985828601610e37565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061108a57607f821691505b60208210810361109d5761109c611043565b5b50919050565b60006060820190506110b86000830186610fd9565b6110c56020830185610ef8565b6110d26040830184610ef8565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061111482610e4c565b915061111f83610e4c565b9250828201905080821115611137576111366110da565b5b9291505056fea26469706673582212201072950fedd03625b897c1e9daf79d3a8595c4e79ca471bf8a49340a1abb69a064736f6c634300081c0033";

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
  "0x6080604052604051613ec8380380613ec883398181016040528101906100259190610acd565b898981600390816100369190610dfb565b5080600490816100469190610dfb565b50505061006561005a61057d60201b60201c565b61058560201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036100d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100ca90610f50565b60405180910390fd5b80341015610116576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010d90610fbc565b60405180910390fd5b620f42408662ffffff161115610161576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101589061104e565b60405180910390fd5b620f42408562ffffff1611156101ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a3906110ba565b60405180910390fd5b87600560146101000a81548160ff021916908360ff1602179055508660068190555081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600960146101000a81548162ffffff021916908362ffffff16021790555084600960176101000a81548162ffffff021916908362ffffff16021790555083600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806008819055506102e6338861064b60201b60201c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405161030c9061110b565b60006040518083038185875af1925050503d8060008114610349576040519150601f19603f3d011682016040523d82523d6000602084013e61034e565b606091505b505090508061035c57600080fd5b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ed9190611120565b73ffffffffffffffffffffffffffffffffffffffff1663c9c6539630600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015610476573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049a9190611120565b6040518363ffffffff1660e01b81526004016104b792919061115c565b6020604051808303816000875af11580156104d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fa9190611120565b600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061056d600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016107ad60201b60201c565b505050505050505050505061127e565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b1906111d1565b60405180910390fd5b6106cc6000838361080860201b60201c565b80600260008282546106de9190611220565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161078f9190611263565b60405180910390a36107a96000838361080d60201b60201c565b5050565b80600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b505050565b505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61087982610830565b810181811067ffffffffffffffff8211171561089857610897610841565b5b80604052505050565b60006108ab610812565b90506108b78282610870565b919050565b600067ffffffffffffffff8211156108d7576108d6610841565b5b6108e082610830565b9050602081019050919050565b60005b8381101561090b5780820151818401526020810190506108f0565b60008484015250505050565b600061092a610925846108bc565b6108a1565b9050828152602081018484840111156109465761094561082b565b5b6109518482856108ed565b509392505050565b600082601f83011261096e5761096d610826565b5b815161097e848260208601610917565b91505092915050565b600060ff82169050919050565b61099d81610987565b81146109a857600080fd5b50565b6000815190506109ba81610994565b92915050565b6000819050919050565b6109d3816109c0565b81146109de57600080fd5b50565b6000815190506109f0816109ca565b92915050565b600062ffffff82169050919050565b610a0e816109f6565b8114610a1957600080fd5b50565b600081519050610a2b81610a05565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a5c82610a31565b9050919050565b610a6c81610a51565b8114610a7757600080fd5b50565b600081519050610a8981610a63565b92915050565b6000610a9a82610a31565b9050919050565b610aaa81610a8f565b8114610ab557600080fd5b50565b600081519050610ac781610aa1565b92915050565b6000806000806000806000806000806101408b8d031215610af157610af061081c565b5b60008b015167ffffffffffffffff811115610b0f57610b0e610821565b5b610b1b8d828e01610959565b9a505060208b015167ffffffffffffffff811115610b3c57610b3b610821565b5b610b488d828e01610959565b9950506040610b598d828e016109ab565b9850506060610b6a8d828e016109e1565b9750506080610b7b8d828e01610a1c565b96505060a0610b8c8d828e01610a1c565b95505060c0610b9d8d828e01610a7a565b94505060e0610bae8d828e01610ab8565b935050610100610bc08d828e01610a7a565b925050610120610bd28d828e016109e1565b9150509295989b9194979a5092959850565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610c3657607f821691505b602082108103610c4957610c48610bef565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610cb17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610c74565b610cbb8683610c74565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610cf8610cf3610cee846109c0565b610cd3565b6109c0565b9050919050565b6000819050919050565b610d1283610cdd565b610d26610d1e82610cff565b848454610c81565b825550505050565b600090565b610d3b610d2e565b610d46818484610d09565b505050565b5b81811015610d6a57610d5f600082610d33565b600181019050610d4c565b5050565b601f821115610daf57610d8081610c4f565b610d8984610c64565b81016020851015610d98578190505b610dac610da485610c64565b830182610d4b565b50505b505050565b600082821c905092915050565b6000610dd260001984600802610db4565b1980831691505092915050565b6000610deb8383610dc1565b9150826002028217905092915050565b610e0482610be4565b67ffffffffffffffff811115610e1d57610e1c610841565b5b610e278254610c1e565b610e32828285610d6e565b600060209050601f831160018114610e655760008415610e53578287015190505b610e5d8582610ddf565b865550610ec5565b601f198416610e7386610c4f565b60005b82811015610e9b57848901518255600182019150602085019450602081019050610e76565b86831015610eb85784890151610eb4601f891682610dc1565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f4f776e657220616e64206d61726b6574696e672077616c6c65742063616e6e6f60008201527f74206265207468652073616d6500000000000000000000000000000000000000602082015250565b6000610f3a602d83610ecd565b9150610f4582610ede565b604082019050919050565b60006020820190508181036000830152610f6981610f2d565b9050919050565b7f5365727669636520666565206973206e6f7420656e6f75676821000000000000600082015250565b6000610fa6601a83610ecd565b9150610fb182610f70565b602082019050919050565b60006020820190508181036000830152610fd581610f99565b9050919050565b7f73656c6c206665652073686f756c64206265206c657373207468616e2031303060008201527f2500000000000000000000000000000000000000000000000000000000000000602082015250565b6000611038602183610ecd565b915061104382610fdc565b604082019050919050565b600060208201905081810360008301526110678161102b565b9050919050565b7f627579206665652073686f756c64206265206c657373207468616e2031303025600082015250565b60006110a4602083610ecd565b91506110af8261106e565b602082019050919050565b600060208201905081810360008301526110d381611097565b9050919050565b600081905092915050565b50565b60006110f56000836110da565b9150611100826110e5565b600082019050919050565b6000611116826110e8565b9150819050919050565b6000602082840312156111365761113561081c565b5b600061114484828501610ab8565b91505092915050565b61115681610a8f565b82525050565b6000604082019050611171600083018561114d565b61117e602083018461114d565b9392505050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006111bb601f83610ecd565b91506111c682611185565b602082019050919050565b600060208201905081810360008301526111ea816111ae565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061122b826109c0565b9150611236836109c0565b925082820190508082111561124e5761124d6111f1565b5b92915050565b61125d816109c0565b82525050565b60006020820190506112786000830184611254565b92915050565b612c3b8061128d6000396000f3fe60806040526004361061014f5760003560e01c806389476069116100b6578063b62496f51161006f578063b62496f5146104b1578063ba6f43e6146104ee578063dd62ed3e14610519578063e086e5ec14610556578063f2fde38b1461056d578063fec408431461059657610156565b8063894760691461038f5780638da5cb5b146103b857806395d89b41146103e35780639a7a23d61461040e578063a457c2d714610437578063a9059cbb1461047457610156565b80633950935111610108578063395093511461028157806356b09616146102be5780636c516a70146102e757806370a0823114610310578063715018a61461034d57806372be26931461036457610156565b806306fdde031461015b578063095ea7b31461018657806318160ddd146101c357806323b872dd146101ee5780632509180e1461022b578063313ce5671461025657610156565b3661015657005b600080fd5b34801561016757600080fd5b506101706105bf565b60405161017d9190611be2565b60405180910390f35b34801561019257600080fd5b506101ad60048036038101906101a89190611c9d565b610651565b6040516101ba9190611cf8565b60405180910390f35b3480156101cf57600080fd5b506101d8610674565b6040516101e59190611d22565b60405180910390f35b3480156101fa57600080fd5b5061021560048036038101906102109190611d3d565b61067e565b6040516102229190611cf8565b60405180910390f35b34801561023757600080fd5b506102406106ad565b60405161024d9190611d9f565b60405180910390f35b34801561026257600080fd5b5061026b6106d3565b6040516102789190611dd6565b60405180910390f35b34801561028d57600080fd5b506102a860048036038101906102a39190611c9d565b6106ea565b6040516102b59190611cf8565b60405180910390f35b3480156102ca57600080fd5b506102e560048036038101906102e09190611df1565b610721565b005b3480156102f357600080fd5b5061030e60048036038101906103099190611e1e565b6107dc565b005b34801561031c57600080fd5b5061033760048036038101906103329190611df1565b6108e4565b6040516103449190611d22565b60405180910390f35b34801561035957600080fd5b5061036261092c565b005b34801561037057600080fd5b50610379610940565b6040516103869190611e7f565b60405180910390f35b34801561039b57600080fd5b506103b660048036038101906103b19190611df1565b610966565b005b3480156103c457600080fd5b506103cd610a8a565b6040516103da9190611d9f565b60405180910390f35b3480156103ef57600080fd5b506103f8610ab4565b6040516104059190611be2565b60405180910390f35b34801561041a57600080fd5b5061043560048036038101906104309190611ec6565b610b46565b005b34801561044357600080fd5b5061045e60048036038101906104599190611c9d565b610bee565b60405161046b9190611cf8565b60405180910390f35b34801561048057600080fd5b5061049b60048036038101906104969190611c9d565b610c65565b6040516104a89190611cf8565b60405180910390f35b3480156104bd57600080fd5b506104d860048036038101906104d39190611df1565b610c88565b6040516104e59190611cf8565b60405180910390f35b3480156104fa57600080fd5b50610503610ca8565b6040516105109190611d9f565b60405180910390f35b34801561052557600080fd5b50610540600480360381019061053b9190611e1e565b610cce565b60405161054d9190611d22565b60405180910390f35b34801561056257600080fd5b5061056b610d55565b005b34801561057957600080fd5b50610594600480360381019061058f9190611df1565b610e13565b005b3480156105a257600080fd5b506105bd60048036038101906105b89190611f41565b610e96565b005b6060600380546105ce90611fb0565b80601f01602080910402602001604051908101604052809291908181526020018280546105fa90611fb0565b80156106475780601f1061061c57610100808354040283529160200191610647565b820191906000526020600020905b81548152906001019060200180831161062a57829003601f168201915b5050505050905090565b60008061065c610f76565b9050610669818585610f7e565b600191505092915050565b6000600654905090565b600080610689610f76565b9050610696858285611147565b6106a18585856111d3565b60019150509392505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560149054906101000a900460ff16905090565b6000806106f5610f76565b90506107168185856107078589610cce565b6107119190612010565b610f7e565b600191505092915050565b610729611418565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078f90612090565b60405180910390fd5b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6107e4611418565b60008273ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610831573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085591906120c5565b73ffffffffffffffffffffffffffffffffffffffff1663c9c6539630846040518363ffffffff1660e01b815260040161088f9291906120f2565b6020604051808303816000875af11580156108ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d291906120c5565b90506108df816001611496565b505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610934611418565b61093e60006114f1565b565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61096e611418565b8073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16036109dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d390612167565b60405180910390fd5b610a876109e7610a8a565b8273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a209190611d9f565b602060405180830381865afa158015610a3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a61919061219c565b8373ffffffffffffffffffffffffffffffffffffffff166115b79092919063ffffffff16565b50565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610ac390611fb0565b80601f0160208091040260200160405190810160405280929190818152602001828054610aef90611fb0565b8015610b3c5780601f10610b1157610100808354040283529160200191610b3c565b820191906000526020600020905b815481529060010190602001808311610b1f57829003601f168201915b5050505050905090565b610b4e611418565b801515600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151503610be0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd79061223b565b60405180910390fd5b610bea8282611496565b5050565b600080610bf9610f76565b90506000610c078286610cce565b905083811015610c4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c43906122cd565b60405180910390fd5b610c598286868403610f7e565b60019250505092915050565b600080610c70610f76565b9050610c7d8185856111d3565b600191505092915050565b600c6020528060005260406000206000915054906101000a900460ff1681565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610d5d611418565b6000610d67610a8a565b73ffffffffffffffffffffffffffffffffffffffff1647604051610d8a9061231e565b60006040518083038185875af1925050503d8060008114610dc7576040519150601f19603f3d011682016040523d82523d6000602084013e610dcc565b606091505b5050905080610e10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e079061237f565b60405180910390fd5b50565b610e1b611418565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8190612411565b60405180910390fd5b610e93816114f1565b50565b610e9e611418565b620f42408262ffffff161115610ee9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee0906124a3565b60405180910390fd5b620f42408162ffffff161115610f34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2b9061250f565b60405180910390fd5b80600960146101000a81548162ffffff021916908362ffffff16021790555081600960176101000a81548162ffffff021916908362ffffff1602179055505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610fed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe4906125a1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361105c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105390612633565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161113a9190611d22565b60405180910390a3505050565b60006111538484610cce565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146111cd57818110156111bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b69061269f565b60405180910390fd5b6111cc8484848403610f7e565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123990612731565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036112b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a8906127c3565b60405180910390fd5b6000600c60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561133c57620f4240600960149054906101000a900462ffffff1662ffffff168361132b91906127e3565b6113359190612854565b90506113c2565b600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156113c157620f4240600960179054906101000a900462ffffff1662ffffff16836113b491906127e3565b6113be9190612854565b90505b5b6000811115611407576113f884600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168361163d565b80826114049190612885565b91505b61141284848461163d565b50505050565b611420610f76565b73ffffffffffffffffffffffffffffffffffffffff1661143e610a8a565b73ffffffffffffffffffffffffffffffffffffffff1614611494576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148b90612905565b60405180910390fd5b565b80600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6116388363a9059cbb60e01b84846040516024016115d6929190612925565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506118b3565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036116ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116a390612731565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361171b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611712906127c3565b60405180910390fd5b61172683838361197b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156117ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a3906129c0565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161189a9190611d22565b60405180910390a36118ad848484611980565b50505050565b6000611915826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166119859092919063ffffffff16565b905060008151148061193757508080602001905181019061193691906129f5565b5b611976576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196d90612a94565b60405180910390fd5b505050565b505050565b505050565b6060611994848460008561199d565b90509392505050565b6060824710156119e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119d990612b26565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611a0b9190612b82565b60006040518083038185875af1925050503d8060008114611a48576040519150601f19603f3d011682016040523d82523d6000602084013e611a4d565b606091505b5091509150611a5e87838387611a6a565b92505050949350505050565b60608315611acc576000835103611ac457611a8485611adf565b611ac3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aba90612be5565b60405180910390fd5b5b829050611ad7565b611ad68383611b02565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082511115611b155781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b499190611be2565b60405180910390fd5b600081519050919050565b600082825260208201905092915050565b60005b83811015611b8c578082015181840152602081019050611b71565b60008484015250505050565b6000601f19601f8301169050919050565b6000611bb482611b52565b611bbe8185611b5d565b9350611bce818560208601611b6e565b611bd781611b98565b840191505092915050565b60006020820190508181036000830152611bfc8184611ba9565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c3482611c09565b9050919050565b611c4481611c29565b8114611c4f57600080fd5b50565b600081359050611c6181611c3b565b92915050565b6000819050919050565b611c7a81611c67565b8114611c8557600080fd5b50565b600081359050611c9781611c71565b92915050565b60008060408385031215611cb457611cb3611c04565b5b6000611cc285828601611c52565b9250506020611cd385828601611c88565b9150509250929050565b60008115159050919050565b611cf281611cdd565b82525050565b6000602082019050611d0d6000830184611ce9565b92915050565b611d1c81611c67565b82525050565b6000602082019050611d376000830184611d13565b92915050565b600080600060608486031215611d5657611d55611c04565b5b6000611d6486828701611c52565b9350506020611d7586828701611c52565b9250506040611d8686828701611c88565b9150509250925092565b611d9981611c29565b82525050565b6000602082019050611db46000830184611d90565b92915050565b600060ff82169050919050565b611dd081611dba565b82525050565b6000602082019050611deb6000830184611dc7565b92915050565b600060208284031215611e0757611e06611c04565b5b6000611e1584828501611c52565b91505092915050565b60008060408385031215611e3557611e34611c04565b5b6000611e4385828601611c52565b9250506020611e5485828601611c52565b9150509250929050565b6000611e6982611c09565b9050919050565b611e7981611e5e565b82525050565b6000602082019050611e946000830184611e70565b92915050565b611ea381611cdd565b8114611eae57600080fd5b50565b600081359050611ec081611e9a565b92915050565b60008060408385031215611edd57611edc611c04565b5b6000611eeb85828601611c52565b9250506020611efc85828601611eb1565b9150509250929050565b600062ffffff82169050919050565b611f1e81611f06565b8114611f2957600080fd5b50565b600081359050611f3b81611f15565b92915050565b60008060408385031215611f5857611f57611c04565b5b6000611f6685828601611f2c565b9250506020611f7785828601611f2c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611fc857607f821691505b602082108103611fdb57611fda611f81565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061201b82611c67565b915061202683611c67565b925082820190508082111561203e5761203d611fe1565b5b92915050565b7f6d61726b6574696e672077616c6c65742063616e277420626520300000000000600082015250565b600061207a601b83611b5d565b915061208582612044565b602082019050919050565b600060208201905081810360008301526120a98161206d565b9050919050565b6000815190506120bf81611c3b565b92915050565b6000602082840312156120db576120da611c04565b5b60006120e9848285016120b0565b91505092915050565b60006040820190506121076000830185611d90565b6121146020830184611d90565b9392505050565b7f4e6f7420616c6c6f776564000000000000000000000000000000000000000000600082015250565b6000612151600b83611b5d565b915061215c8261211b565b602082019050919050565b6000602082019050818103600083015261218081612144565b9050919050565b60008151905061219681611c71565b92915050565b6000602082840312156121b2576121b1611c04565b5b60006121c084828501612187565b91505092915050565b7f4175746f6d61746564206d61726b6574206d616b65722070616972206973206160008201527f6c72656164792073657420746f20746861742076616c75650000000000000000602082015250565b6000612225603883611b5d565b9150612230826121c9565b604082019050919050565b6000602082019050818103600083015261225481612218565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006122b7602583611b5d565b91506122c28261225b565b604082019050919050565b600060208201905081810360008301526122e6816122aa565b9050919050565b600081905092915050565b50565b60006123086000836122ed565b9150612313826122f8565b600082019050919050565b6000612329826122fb565b9150819050919050565b7f4661696c656420696e207769746864726177616c000000000000000000000000600082015250565b6000612369601483611b5d565b915061237482612333565b602082019050919050565b600060208201905081810360008301526123988161235c565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006123fb602683611b5d565b91506124068261239f565b604082019050919050565b6000602082019050818103600083015261242a816123ee565b9050919050565b7f73656c6c206665652073686f756c64206265206c657373207468616e2031303060008201527f2500000000000000000000000000000000000000000000000000000000000000602082015250565b600061248d602183611b5d565b915061249882612431565b604082019050919050565b600060208201905081810360008301526124bc81612480565b9050919050565b7f627579206665652073686f756c64206265206c657373207468616e2031303025600082015250565b60006124f9602083611b5d565b9150612504826124c3565b602082019050919050565b60006020820190508181036000830152612528816124ec565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061258b602483611b5d565b91506125968261252f565b604082019050919050565b600060208201905081810360008301526125ba8161257e565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061261d602283611b5d565b9150612628826125c1565b604082019050919050565b6000602082019050818103600083015261264c81612610565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000612689601d83611b5d565b915061269482612653565b602082019050919050565b600060208201905081810360008301526126b88161267c565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061271b602583611b5d565b9150612726826126bf565b604082019050919050565b6000602082019050818103600083015261274a8161270e565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006127ad602383611b5d565b91506127b882612751565b604082019050919050565b600060208201905081810360008301526127dc816127a0565b9050919050565b60006127ee82611c67565b91506127f983611c67565b925082820261280781611c67565b9150828204841483151761281e5761281d611fe1565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061285f82611c67565b915061286a83611c67565b92508261287a57612879612825565b5b828204905092915050565b600061289082611c67565b915061289b83611c67565b92508282039050818111156128b3576128b2611fe1565b5b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006128ef602083611b5d565b91506128fa826128b9565b602082019050919050565b6000602082019050818103600083015261291e816128e2565b9050919050565b600060408201905061293a6000830185611d90565b6129476020830184611d13565b9392505050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006129aa602683611b5d565b91506129b58261294e565b604082019050919050565b600060208201905081810360008301526129d98161299d565b9050919050565b6000815190506129ef81611e9a565b92915050565b600060208284031215612a0b57612a0a611c04565b5b6000612a19848285016129e0565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000612a7e602a83611b5d565b9150612a8982612a22565b604082019050919050565b60006020820190508181036000830152612aad81612a71565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000612b10602683611b5d565b9150612b1b82612ab4565b604082019050919050565b60006020820190508181036000830152612b3f81612b03565b9050919050565b600081519050919050565b6000612b5c82612b46565b612b6681856122ed565b9350612b76818560208601611b6e565b80840191505092915050565b6000612b8e8284612b51565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612bcf601d83611b5d565b9150612bda82612b99565b602082019050919050565b60006020820190508181036000830152612bfe81612bc2565b905091905056fea264697066735822122015b21185ec5ec78dd7c2baca8ffa700774905610c30f6a9d1e81e58b30a9da8364736f6c634300081c0033";

export const ADVANCED_TOKEN_ABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "args",
        type: "tuple",
        internalType: "struct AdvancedToken.Args",
        components: [
          { name: "name", type: "string", internalType: "string" },
          { name: "symbol", type: "string", internalType: "string" },
          { name: "_decimals", type: "uint8", internalType: "uint8" },
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
          { name: "buyFee", type: "uint256", internalType: "uint256" },
          { name: "sellFee", type: "uint256", internalType: "uint256" },
          { name: "dexType", type: "uint256", internalType: "uint256" },
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
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "automatedMarketMakerPairs",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "dexRouter",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "dexType",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mainPair",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "onERC721Received",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
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
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setAutomatedMarketMakerPair",
    inputs: [
      { name: "pair", type: "address", internalType: "address" },
      { name: "value", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setWhiteList",
    inputs: [
      { name: "_addr", type: "address", internalType: "address" },
      { name: "value", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateBurnFee",
    inputs: [
      { name: "_buyBurnFee", type: "uint256", internalType: "uint256" },
      { name: "_sellBurnFee", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateLpFee",
    inputs: [
      { name: "_lpBuyFee", type: "uint256", internalType: "uint256" },
      { name: "_lpSellFee", type: "uint256", internalType: "uint256" },
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
    inputs: [{ name: "_maxWallet", type: "uint256", internalType: "uint256" }],
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
      { name: "_buyTaxFee", type: "uint256", internalType: "uint256" },
      { name: "_sellTaxFee", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateTaxReceiver",
    inputs: [
      { name: "taxReceiver_", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "whiteList",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
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
    inputs: [{ name: "token", type: "address", internalType: "address" }],
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
      { name: "spender", type: "address", internalType: "address" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [{ name: "spender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [{ name: "token", type: "address", internalType: "address" }],
  },
];

export const ADVANCED_TOKEN_BYTECODE =
  "0x60808060405261092480380380916100178285610897565b8339810190602081830312610893578051906001600160401b03821161089357610280828201840312610893576040519261028084016001600160401b038111858210176107a457604052818301516001600160401b038111610893578161008291858501016108ba565b845281830160200151906001600160401b038211610893576100a791848401016108ba565b91826020850152604081830101519160ff83168303610893576102609260408601526060828201015160608601526100e360808383010161090f565b60808601526100f660a08383010161090f565b60a086015280820160c0818101519087015260e08082015190870152610100808201519087015261012080820151908701526101408082015190870152610140906101600161090f565b6101608601520161018081810151908501526101a080820151908501526101c080820151908501526101e080820151908501526102008082015190850152610220808201519085015261024080820151908501520151610260830190815282518051909391906001600160401b0381116107a457600354600181811c91168015610889575b602082101461078657601f8111610826575b50602094601f82116001146107c3579481929394955f926107b8575b50508160011b915f199060031b1c1916176003555b82516001600160401b0381116107a457600454600181811c9116801561079a575b602082101461078657601f8111610723575b506020601f82116001146106c057819293945f926106b5575b50508160011b915f199060031b1c1916176004555b33156106a2576005546040519190336001600160a01b0382167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a360408401516001600160a81b03199091163360ff60a01b19161760a09190911b60ff60a01b161760055560608301516006556080830151600780546001600160a01b0319166001600160a01b0392909216919091179055513410610660575060018060a01b0360a08201511660018060a01b0319600854161760085560c081015160095560e0810151600a5561010081015180600b556101208201519182600c55610140810151600d5560018060a01b0361016082015116928360018060a01b0319600e541617600e55610180820151600f556101a0820151806010556101c0830151806011556101e08401519182601255610200850151938460135562030d4061024061022088015197886014550151978860155511159081610652575b50156106025762030d40101590816105f4575b50156105a15762030d4010159081610593575b50156105365762030d4010159081610528575b50156104d05730156104bd5780156104aa57305f52600160205260405f20815f5260205260405f205f1990556040515f1981527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203092a360405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b60405162461bcd60e51b815260206004820152602a60248201527f4275726e696e672070657263656e742063616e27742062652067726561746572604482015269207468616e203230252160b01b6064820152608490fd5b62030d40915011155f6103fe565b60405162461bcd60e51b815260206004820152602f60248201527f4c697175696469747920616464696e67206665652063616e277420626520677260448201526e6561746572207468616e203230252160881b6064820152608490fd5b62030d40915011155f6103eb565b60405162461bcd60e51b815260206004820152602560248201527f526577617264206665652063616e27742062652067726561746572207468616e604482015264203230252160d81b6064820152608490fd5b62030d40915011155f6103d8565b60405162461bcd60e51b815260206004820152602260248201527f546178206665652063616e27742062652067726561746572207468616e203230604482015261252160f01b6064820152608490fd5b62030d40915011155f6103c5565b62461bcd60e51b815260206004820152601a60248201527f5365727669636520666565206973206e6f7420656e6f756768210000000000006044820152606490fd5b631e4fbdf760e01b5f525f60045260245ffd5b015190505f80610254565b601f1982169060045f52805f20915f5b81811061070b575095836001959697106106f3575b505050811b01600455610269565b01515f1960f88460031b161c191690555f80806106e5565b9192602060018192868b0151815501940192016106d0565b60045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c8101916020841061077c575b601f0160051c01905b818110610771575061023b565b5f8155600101610764565b909150819061075b565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610229565b634e487b7160e01b5f52604160045260245ffd5b015190505f806101f3565b601f1982169560035f52805f20915f5b88811061080e575083600195969798106107f6575b505050811b01600355610208565b01515f1960f88460031b161c191690555f80806107e8565b919260206001819286850151815501940192016107d3565b60035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c8101916020841061087f575b601f0160051c01905b81811061087457506101d7565b5f8155600101610867565b909150819061085e565b90607f16906101c5565b5f80fd5b601f909101601f19168101906001600160401b038211908210176107a457604052565b81601f82011215610893578051906001600160401b0382116107a457604051926108ee601f8401601f191660200185610897565b8284526020838301011161089357815f9260208093018386015e8301015290565b51906001600160a01b03821682036108935756fe";

export const ZENTRA_ROUTER_ADDRESS =
  "0x3fe70FD529B9BE612283c520F555707FC043D6Ae";
