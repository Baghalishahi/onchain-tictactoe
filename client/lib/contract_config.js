export const tictactoe_abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_playerTwo",
				"type": "address",
			},
		],
		"stateMutability": "nonpayable",
		"type": "constructor",
	},
	{
		"inputs": [],
		"name": "Unauthorized",
		"type": "error",
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_playerId",
				"type": "uint256",
			},
		],
		"name": "checkState",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256",
			},
		],
		"stateMutability": "view",
		"type": "function",
	},
	{
		"inputs": [],
		"name": "getGame",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256",
			},
		],
		"stateMutability": "view",
		"type": "function",
	},
	{
		"inputs": [],
		"name": "getPlayers",
		"outputs": [
			{
				"internalType": "address[2]",
				"name": "",
				"type": "address[2]",
			},
		],
		"stateMutability": "view",
		"type": "function",
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_move",
				"type": "uint256",
			},
		],
		"name": "move",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256",
			},
		],
		"stateMutability": "nonpayable",
		"type": "function",
	},
	{
		"inputs": [],
		"name": "newGame",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256",
			},
		],
		"stateMutability": "nonpayable",
		"type": "function",
	},
];

export const tictactoe_bytecode =
	"0x60806040526000805534801561001457600080fd5b50604051610b88380380610b888339818101604052810190610036919061015a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361006f57600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610187565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610127826100fc565b9050919050565b6101378161011c565b811461014257600080fd5b50565b6000815190506101548161012e565b92915050565b6000602082840312156101705761016f6100f7565b5b600061017e84828501610145565b91505092915050565b6109f2806101966000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630fdcf877146100515780634494fd9f146100815780637d03f5f31461009f57806387cb15f7146100bd575b600080fd5b61006b6004803603810190610066919061074d565b6100ed565b6040516100789190610789565b60405180910390f35b610089610293565b6040516100969190610789565b60405180910390f35b6100a761029c565b6040516100b49190610789565b60405180910390f35b6100d760048036038101906100d2919061074d565b6103ba565b6040516100e49190610789565b60405180910390f35b6000806000549050826003603f6101049190610802565b901b603f82160361011957600191505061028e565b6006836003603f61012a9190610802565b901b901b6006603f901b82160361014557600191505061028e565b600c836003603f6101569190610802565b901b901b600c603f901b82160361017157600191505061028e565b8260036130c36101819190610802565b901b6130c382160361019757600191505061028e565b60028360036130c36101a99190610802565b901b901b60026130c3901b8216036101c557600191505061028e565b60048360036130c36101d79190610802565b901b901b60046130c3901b8216036101f357600191505061028e565b826003620303036102049190610802565b901b6203030382160361021b57600191505061028e565b82600361333061022b9190610802565b901b61333082160361024157600191505061028e565b60005b6009811015610287576000600183161480156102635750600060028316145b156102735760009250505061028e565b600282901c91508080600101915050610244565b5060029150505b919050565b60008054905090565b600033600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561034b5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b15610382576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008054905060008111156103a25762100000601582901b1790506103ab565b62100000811790505b80600081905550809250505090565b600033600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156104695750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b156104a0576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336104aa816106a7565b60016012600054901c16146104f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104eb90610890565b60405180910390fd5b836000600182901b9050600060018261050d91906108b0565b90506000805490506001808483901c16148061052e57506001808383901c16145b1561056e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056590610930565b60405180910390fd5b600984106105b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a890610930565b60405180910390fd5b60008054905060006001601383901c161480156105d45750600180601483901c16145b610613576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a9061099c565b60405180910390fd5b600061061e336106a7565b90508060018b901b61063091906108b0565b6001901b82189150620400008218600081905550600061064f826100ed565b9050600181036106805781601361066691906108b0565b6001901b600054186000819055506001995050505061069c565b60028103610694576002995050505061069c565b600099505050505b505050505050919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610705576001610708565b60005b60ff169050919050565b600080fd5b6000819050919050565b61072a81610717565b811461073557600080fd5b50565b60008135905061074781610721565b92915050565b60006020828403121561076357610762610712565b5b600061077184828501610738565b91505092915050565b61078381610717565b82525050565b600060208201905061079e600083018461077a565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061080d82610717565b915061081883610717565b925082610828576108276107a4565b5b828204905092915050565b600082825260208201905092915050565b7f4e6f7420796f7572207475726e00000000000000000000000000000000000000600082015250565b600061087a600d83610833565b915061088582610844565b602082019050919050565b600060208201905081810360008301526108a98161086d565b9050919050565b60006108bb82610717565b91506108c683610717565b92508282019050808211156108de576108dd6107d3565b5b92915050565b7f696e76616c6964206d6f76650000000000000000000000000000000000000000600082015250565b600061091a600c83610833565b9150610925826108e4565b602082019050919050565b600060208201905081810360008301526109498161090d565b9050919050565b7f47616d652068617320656e646564000000000000000000000000000000000000600082015250565b6000610986600e83610833565b915061099182610950565b602082019050919050565b600060208201905081810360008301526109b581610979565b905091905056fea2646970667358221220f056cc9b448a07e98e4461afab93e7786952929d3e8dd19d1b5da4b47934ac6f64736f6c63430008110033";

export const registry_abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "gameContract",
				"type": "address",
			},
		],
		"name": "GameAlreadyExists",
		"type": "error",
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address",
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256",
			},
		],
		"name": "Games",
		"outputs": [
			{
				"internalType": "address",
				"name": "firstPlayer",
				"type": "address",
			},
			{
				"internalType": "address",
				"name": "secondPlayer",
				"type": "address",
			},
			{
				"internalType": "address",
				"name": "gameContract",
				"type": "address",
			},
		],
		"stateMutability": "view",
		"type": "function",
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_firstPlayer",
				"type": "address",
			},
		],
		"name": "getGameList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "firstPlayer",
						"type": "address",
					},
					{
						"internalType": "address",
						"name": "secondPlayer",
						"type": "address",
					},
					{
						"internalType": "address",
						"name": "gameContract",
						"type": "address",
					},
				],
				"internalType": "struct TictactoeRegistry.Game[]",
				"name": "",
				"type": "tuple[]",
			},
		],
		"stateMutability": "view",
		"type": "function",
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_firstPlayer",
				"type": "address",
			},
			{
				"internalType": "address",
				"name": "_secondPlayer",
				"type": "address",
			},
			{
				"internalType": "address",
				"name": "_gameContract",
				"type": "address",
			},
		],
		"name": "register",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_firstPlayer",
				"type": "address",
			},
			{
				"internalType": "address",
				"name": "_secondPlayer",
				"type": "address",
			},
			{
				"internalType": "address",
				"name": "_gameContract",
				"type": "address",
			},
		],
		"name": "remove",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
	},
];

export const registry_address = "0x9d6931A596547BC194a948231bfe451e3287dee4";