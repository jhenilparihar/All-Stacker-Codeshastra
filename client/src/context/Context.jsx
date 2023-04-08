import Web3 from "web3";
import { contractABI, contractAddress } from "../utils/constants";

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

export const isMetamaskConnected = async () => {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  if (accounts.length === 0) {
    return false;
  } else {
    return true;
  }
};

export const connectToMetamask = async () => {
  await window.ethereum.enable();
  window.location.reload();
};

export const getContract = async () => {
  return new window.web3.eth.Contract(contractABI, contractAddress);
};

export const getAccountAddress = async () => {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  const netID = await web3.eth.net.getId();
  return accounts[0];
};

export const addProfile = async (name, email, imageHash) => {
  const contract = await getContract();
  const account = await getAccountAddress();
  await contract.methods
    .addUserProfile(name, email, imageHash)
    .send({ from: account })
    .on("confirmation", () => {
      window.location.reload();
    });
};

export const getProfile = async () => {
  const account = await getAccountAddress();
  const contract = await getContract();
  const profile = await contract.methods.allUsers(account).call();
  return profile;
};

export const addProduct = async (name, productDescription, image) => {
  const account = await getAccountAddress();
  const contract = await getContract();
  await contract.methods
    .addProduct(name, productDescription, image)
    .send({ from: account })
    .on("confirmation", () => {
      window.location.reload();
    });
};
