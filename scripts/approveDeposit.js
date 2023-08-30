// Import necessary packages and contracts
const { ethers } = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/Robotics.sol/Robotics.json");
require("dotenv").config();
const tokenABI = tokenContractJSON.abi;

async function main() {

  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/Bh22s-iYGmFwy-9Dq3New4jIpUES9xZt";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);


  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();

  // Get ERC721A contract instance
  const NFT = await ethers.getContractFactory("Robotics");
  const nft = await NFT.attach("0xB9c9918dd0C46bc31CEFC3768d4BA7b0521Cb1AA");

  // Get the FXRoot contract instance (FxChildTunnel contract on Ethereum FxChain)
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(fxRootContractABI, fxRootAddress);

  // TokenIds to transfer (assuming tokenIds array contains the token IDs to be transferred)
  const tokenIds = [0, 1, 2, 3, 4, 5];

  // Approve the nfts for transfer
  const approveTx = await nft
    .connect(signer)
    .setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Approval confirmed");

  // Deposit the NFTs to the FXRoot contract on the Ethereum FxChain network
  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot
      .connect(signer)
      .deposit(nft.address, wallet.address, tokenIds[i], "0x6566");

    // Wait for the deposit transaction to be confirmed
    await depositTx.wait();
  }
  // Print the balance of the wallet after the transfer
  console.log("Approved and deposited");


  const balance = await nft.balanceOf(wallet.address);


  console.log("NFT wallet balance", wallet.address,"is: ", balance.toString());
}

// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
