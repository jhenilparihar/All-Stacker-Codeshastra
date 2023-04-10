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

export const addProduct = async (
  name,
  productDescription,
  image,
  productPrice
) => {
  const account = await getAccountAddress();
  const contract = await getContract();
  const price = window.web3.utils.toWei(productPrice.toString(), "ether");

  await contract.methods
    .addProduct(name, productDescription, image, price)
    .send({ from: account })
    .on("confirmation", () => {
      window.location.reload();
    });
};

export const getProduct = async () => {
  const contract = await getContract();
  const count = await contract.methods.productCount().call();
  let allProduct = [];
  for (var i = 1; i <= count; i++) {
    const product = await contract.methods.allProduct(i).call();
    allProduct.push(product);
  }
  return allProduct;
};

export const updatePoints = async (points) => {
  const contract = await getContract();
  const account = await getAccountAddress();
  await contract.methods
    .updateRewards(points)
    .send({ from: account })
    .on("confirmation", () => {
      window.location.reload();
    });
};

export const getAllProfile = async () => {
  const contract = await getContract();
  const count = await contract.methods.userCount().call();
  let allProfile = [];
  for (var i = 1; i <= count; i++) {
    const walletAddress = await contract.methods.allUsersAddress(i).call();
    const profile = await contract.methods.allUsers(walletAddress).call();
    allProfile.push({
      name: profile.name,
      image: profile.profileImage,
      tokens: profile.pointsBalance,
    });
  }
  return allProfile;
};

export const getAllNFT = async () => {
  const contract = await getContract();
  const count = await contract.methods.nftCounter().call();
  let allNFT = [];
  for (var i = 1; i <= count; i++) {
    const nft = await contract.methods.allNFTs(i).call();
    allNFT.push(nft);
  }
  return allNFT;
};

export const buyProduct = async (productId, price) => {
  const contract = await getContract();
  const account = await getAccountAddress();
  await contract.methods
    .placeOrderUsingMoney(productId, 5)
    .send({ from: account, value: price })
    .on("confirmation", () => {
      window.location.reload();
    });
};

export const addNFT = async (name, details, tokenRequired, level) => {
  const contract = await getContract();
  const account = await getAccountAddress();
  await contract.methods
    .addNFT(name, details, tokenRequired, level)
    .send({ from: account })
    .on("confirmation", () => {
      window.location.reload();
    });
};
export const addCups = async (_cups) => {
  const price = window.web3.utils.toWei((0.001).toString(), "ether");

  const contract = await getContract();
  const account = await getAccountAddress();
  await contract.methods
    .addCups(_cups)
    .send({ from: account, value: price })
    .on("confirmation", () => {
      window.location.reload();
    });
};

export const deduceCups = async (_cups) => {
  const contract = await getContract();
  const account = await getAccountAddress();
  await contract.methods
    .deduceCups(_cups)
    .send({ from: account })
    .on("confirmation", () => {
      window.location.reload();
    });
};

export const buyNFT = async (nftId) => {
  const contract = await getContract();
  const account = await getAccountAddress();

  await contract.methods
    .buyNFT(nftId, "")
    .send({ from: account })
    .on("confirmation", () => {
      window.location.reload();
    });
};
