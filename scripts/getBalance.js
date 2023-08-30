const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Robotics.sol/Robotics.json");

const tokenAddress = "0xFb66893BC29E0b4C220aBe2560D8ad5c1D774656"; // Ethereum address of the deployed ERC721A contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xe45cE4Ace16A6B0E91AC46B56af9DB4b7443fAe6"; // Ethereum public address for the wallet

async function main() {
    // Get the contract instance of the deployed ERC721A contract
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    // Log the total number of ERC721A tokens owned by the specified wallet address
    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + "  tokens");
  }
  
 // Call the main function and handle any errors
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
