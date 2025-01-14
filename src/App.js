import React, { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import "./App.css";
import ChatPage from "./components/ChatPage/ChatPage";

function App() {
  // useEffect(async () => {
  //   if (window.ethereum) {
  //     console.log("detected");

  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setAccount(accounts[0]);
  //       console.log(accounts[0]);
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       const provider1 = new ethers.providers.JsonRpcProvider(
  //         "https://rpc.ankr.com/polygon_mumbai",
  //         80001
  //       );
  //       const provider2 = new ethers.providers.JsonRpcProvider(
  //         "https://rpc.ankr.com/avalanche_fuji",
  //         43113
  //       );
  //       const signer = provider.getSigner();

  //       const contract = new ethers.Contract(from, erc20_abi, provider1);

  //       let balance = await contract.balanceOf(accounts[0]);

  //       console.log(ethers.utils.formatEther(balance) * Math.pow(10, 6));
  //       setPolygonBalance(ethers.utils.formatEther(balance) * Math.pow(10, 6));
  //       const contract2 = new ethers.Contract(to, erc20_abi, provider2);
  //       balance = await contract2.balanceOf(accounts[0]);
  //       console.log(ethers.utils.formatEther(balance) * Math.pow(10, 12));
  //       setAvalancheBalance(
  //         ethers.utils.formatEther(balance) * Math.pow(10, 12)
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // }, []);
  // const from = "0x22bAA8b6cdd31a0C5D1035d6e72043f4Ce6aF054";
  // const to = "0xb452b513552aa0B57c4b1C9372eFEa78024e5936";
  // const [amount, setAmount] = useState(0);

  // const [quoteData, setQuoteData] = useState("");
  // const [polygonBalance, setPolygonBalance] = useState(0);
  // const [avalancheBalance, setAvalancheBalance] = useState(0);
  // const [account, setAccount] = useState("Connect Wallet");
  // const [step1, setStep1] = useState("");
  // const [step2, setStep2] = useState("");
  // const [step3, setStep3] = useState("");
  // const erc20_abi = [
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "spender",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "value",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "approve",
  //     outputs: [
  //       {
  //         internalType: "bool",
  //         name: "",
  //         type: "bool",
  //       },
  //     ],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "value",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "burn",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "account",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "value",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "burnFrom",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "initialOwner",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "nonpayable",
  //     type: "constructor",
  //   },
  //   {
  //     inputs: [],
  //     name: "ECDSAInvalidSignature",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "length",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "ECDSAInvalidSignatureLength",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "bytes32",
  //         name: "s",
  //         type: "bytes32",
  //       },
  //     ],
  //     name: "ECDSAInvalidSignatureS",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "spender",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "allowance",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "needed",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "ERC20InsufficientAllowance",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "sender",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "balance",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "needed",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "ERC20InsufficientBalance",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "approver",
  //         type: "address",
  //       },
  //     ],
  //     name: "ERC20InvalidApprover",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "receiver",
  //         type: "address",
  //       },
  //     ],
  //     name: "ERC20InvalidReceiver",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "sender",
  //         type: "address",
  //       },
  //     ],
  //     name: "ERC20InvalidSender",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "spender",
  //         type: "address",
  //       },
  //     ],
  //     name: "ERC20InvalidSpender",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "deadline",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "ERC2612ExpiredSignature",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "signer",
  //         type: "address",
  //       },
  //       {
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //     ],
  //     name: "ERC2612InvalidSigner",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "account",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "currentNonce",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "InvalidAccountNonce",
  //     type: "error",
  //   },
  //   {
  //     inputs: [],
  //     name: "InvalidShortString",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "to",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "amount",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "mint",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //     ],
  //     name: "OwnableInvalidOwner",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "account",
  //         type: "address",
  //       },
  //     ],
  //     name: "OwnableUnauthorizedAccount",
  //     type: "error",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "string",
  //         name: "str",
  //         type: "string",
  //       },
  //     ],
  //     name: "StringTooLong",
  //     type: "error",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "spender",
  //         type: "address",
  //       },
  //       {
  //         indexed: false,
  //         internalType: "uint256",
  //         name: "value",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "Approval",
  //     type: "event",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [],
  //     name: "EIP712DomainChanged",
  //     type: "event",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "previousOwner",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "newOwner",
  //         type: "address",
  //       },
  //     ],
  //     name: "OwnershipTransferred",
  //     type: "event",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //       {
  //         internalType: "address",
  //         name: "spender",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "value",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "deadline",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "uint8",
  //         name: "v",
  //         type: "uint8",
  //       },
  //       {
  //         internalType: "bytes32",
  //         name: "r",
  //         type: "bytes32",
  //       },
  //       {
  //         internalType: "bytes32",
  //         name: "s",
  //         type: "bytes32",
  //       },
  //     ],
  //     name: "permit",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "renounceOwnership",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "to",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "value",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "transfer",
  //     outputs: [
  //       {
  //         internalType: "bool",
  //         name: "",
  //         type: "bool",
  //       },
  //     ],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "from",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "to",
  //         type: "address",
  //       },
  //       {
  //         indexed: false,
  //         internalType: "uint256",
  //         name: "value",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "Transfer",
  //     type: "event",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "from",
  //         type: "address",
  //       },
  //       {
  //         internalType: "address",
  //         name: "to",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "value",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "transferFrom",
  //     outputs: [
  //       {
  //         internalType: "bool",
  //         name: "",
  //         type: "bool",
  //       },
  //     ],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "newOwner",
  //         type: "address",
  //       },
  //     ],
  //     name: "transferOwnership",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //       {
  //         internalType: "address",
  //         name: "spender",
  //         type: "address",
  //       },
  //     ],
  //     name: "allowance",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "account",
  //         type: "address",
  //       },
  //     ],
  //     name: "balanceOf",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "decimals",
  //     outputs: [
  //       {
  //         internalType: "uint8",
  //         name: "",
  //         type: "uint8",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "DOMAIN_SEPARATOR",
  //     outputs: [
  //       {
  //         internalType: "bytes32",
  //         name: "",
  //         type: "bytes32",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "eip712Domain",
  //     outputs: [
  //       {
  //         internalType: "bytes1",
  //         name: "fields",
  //         type: "bytes1",
  //       },
  //       {
  //         internalType: "string",
  //         name: "name",
  //         type: "string",
  //       },
  //       {
  //         internalType: "string",
  //         name: "version",
  //         type: "string",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "chainId",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "address",
  //         name: "verifyingContract",
  //         type: "address",
  //       },
  //       {
  //         internalType: "bytes32",
  //         name: "salt",
  //         type: "bytes32",
  //       },
  //       {
  //         internalType: "uint256[]",
  //         name: "extensions",
  //         type: "uint256[]",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "name",
  //     outputs: [
  //       {
  //         internalType: "string",
  //         name: "",
  //         type: "string",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //     ],
  //     name: "nonces",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "owner",
  //     outputs: [
  //       {
  //         internalType: "address",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "symbol",
  //     outputs: [
  //       {
  //         internalType: "string",
  //         name: "",
  //         type: "string",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "totalSupply",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  // ];
  // const PATH_FINDER_API_URL = "https://api.pf.testnet.routerprotocol.com/api";
  // const getQuote = async (params) => {
  //   const endpoint = "v2/quote";
  //   const quoteUrl = `${PATH_FINDER_API_URL}/${endpoint}`;

  //   console.log(quoteUrl);

  //   try {
  //     const res = await axios.get(quoteUrl, { params });
  //     return res.data;
  //   } catch (e) {
  //     console.error(`Fetching quote data from pathfinder: ${e}`);
  //   }
  // };
  // const checkAndSetAllowance = async (
  //   wallet,
  //   tokenAddress,
  //   approvalAddress,
  //   amount
  // ) => {
  //   // Transactions with the native token don't need approval
  //   if (tokenAddress === ethers.constants.AddressZero) {
  //     return;
  //   }

  //   const erc20 = new ethers.Contract(tokenAddress, erc20_abi, wallet);
  //   const allowance = await erc20.allowance(
  //     await wallet.getAddress(),
  //     approvalAddress
  //   );
  //   if (allowance.lt(amount)) {
  //     const approveTx = await erc20.approve(approvalAddress, amount, {
  //       gasPrice: await wallet.provider.getGasPrice(),
  //     });
  //     try {
  //       await approveTx.wait();
  //       console.log(`Transaction mined succesfully: ${approveTx.hash}`);
  //     } catch (error) {
  //       console.log(`Transaction failed with error: ${error}`);
  //     }
  //   } else {
  //     console.log("enough allowance");
  //     alert("enough allowance");
  //   }
  // };
  // const getTransaction = async (params, quoteData) => {
  //   const endpoint = "v2/transaction";
  //   const txDataUrl = `${PATH_FINDER_API_URL}/${endpoint}`;

  //   console.log(txDataUrl);

  //   try {
  //     const res = await axios.post(txDataUrl, {
  //       ...quoteData,
  //       fromTokenAddress: params.fromTokenAddress,
  //       toTokenAddress: params.toTokenAddress,
  //       slippageTolerance: 0.5,
  //       senderAddress: account,
  //       receiverAddress: account,
  //       widgetId: params.widgetId,
  //     });
  //     return res.data;
  //   } catch (e) {
  //     console.error(`Fetching tx data from pathfinder: ${e}`);
  //   }
  // };

  return <ChatPage />;
}

export default App;
