# POLYGON MODULE - 1 
This Solidity smart contract implements an NFT (Non-Fungible Token) contract named "Robotics" that is based on the ERC721A standard. ERC721A extends the ERC721 standard and includes additional functionality.

## Overview
The Robotics contract allows the creation and management of NFTs related to the field of Robotics. It includes features such as minting new NFTs, setting a maximum quantity limit, and defining a base URL for token metadata.

## Contract Details
Name: Robotics<br>
Symbol: RBT

## Functionality
The contract provides the following functionality:

1. Constructor: Initializes the contract with the name "Robotics" and symbol "RBT". The deployer of the contract is set as the owner.

2. Modifier onlyOwner: A custom modifier that restricts certain functions to be callable only by the owner of the contract.

3. Minting (mint function): The mint function allows the owner to mint new NFTs. The function takes a parameter quantity to specify the number of NFTs to mint. The total supply of NFTs cannot exceed the maxQuantity limit.

4. Base URLs: The contract includes five base URLs that can be used to construct the full URLs for token metadata. Each token will have a unique URI formed by concatenating the base URL with the token ID.
   
## Getting Started

### Prerequisites

Before you begin setting up and executing the project, make sure you have the following:

- DALLE 2, Midjourney, or Lexica for generating images, depending on the specific AI model chosen.
- An IPFS account and access to pinata.cloud or a similar service for storing the NFT images securely.
- Access to the Ethereum network to deploy the smart contract.
- Familiarity with the Polygon network and understanding of the token mapper tool.
- Hardhat framework installed to facilitate scripting and testing.

### Execution

To successfully execute the project, follow these steps:

1. **Generate a 5-item collection**: Utilize Lexica, DALLE 2, or Midjourney AI model to create a collection of 5 unique NFTs. Ensure that each NFT represents a distinct and desirable piece for your collection.

2. **Store items on IPFS**: Upload the generated NFT items to IPFS using a service like pinata.cloud. Obtain the IPFS hashes for each item, as they will serve as the token URIs for the NFTs.

3. **Deploy the NFT Contract**: Deploy the MyNFT contract on the Ethereum network. During deployment, provide a suitable name and symbol for the contract and include a detailed prompt description for the NFTs.
   - Execute the following command: `npx hardhat run scripts/deploy.js --network goerli`

4. **Implement promptDescriptionDetail function**: Enhance the MyNFT contract by implementing the `promptDescriptionDetail` function. This function should return a comprehensive description of the prompt used to generate the NFTs.

5. **Map the NFT collection**: Optionally, you can map the NFT collection on the Polygon network using the token mapper tool. This step helps visualize and interact with the collection on the Polygon network.
  
6. **Batch Mint NFTs**: Write a script to perform batch minting of all 5 NFTs. Utilize the `batchMint` function of the MyNFT contract to assign each NFT to a recipient address and set the corresponding IPFS hash as the token URI.
   - Execute the command: `npx hardhat run scripts/Mint.js --network goerli`

7. **Approve NFTs for Transfer**: Implement the necessary steps to approve the NFTs for transfer from the Ethereum network to the Polygon Mumbai network.

8. **Deposit NFTs to the Bridge**: Perform the required operations to deposit the NFTs to the FxPortal Bridge. This step facilitates the secure transfer of the NFTs from the Ethereum network to the Polygon Mumbai network.
- Execute the command: `npx hardhat run scripts/Deposite.js --network goerli`

9. **Test balanceOf on Mumbai**: Finally, test the `balanceOf` function on the Polygon Mumbai network to verify the NFT balance of a specific address.
- Execute the command: `npx hardhat run scripts/getBalance.js --network mumbai`

Please exercise caution and follow best practices while executing the project, especially when handling sensitive data, interacting with smart contracts, and managing NFT assets.

# Batch Mint ERC721A Tokens

This script facilitates the batch minting of ERC721A tokens on the Ethereum network. It uses the Hardhat development environment for Ethereum smart contracts and requires the specification of the private key and network provider URL to interact with the network. The script utilizes the `Robotics` contract with the ERC721A implementation for creating the tokens.

## Prerequisites

Before running the script, ensure the following:

- Install the required dependencies by running `npm install`.
- Set up a `.env` file and define the `PRIVATE_KEY` variable with the private key of the account performing the minting.

## Execution

To batch mint ERC721A tokens, follow these steps:

1. **Define the Private Key**: Set the private key of the account that will execute the minting process in the `.env` file.

2. **Network Provider**: The script is currently configured to connect to the Goerli test network using Alchemy's node (`https://eth-goerli.g.alchemy.com/v2/Bh22s-iYGmFwy-9Dq3New4jIpUES9xZt`). You may modify the `networkAddress` variable if you want to connect to a different Ethereum network.

3. **Contract Address**: Ensure that the `contractAddress` variable is set to the address of the deployed `Robotics` contract on the desired network. This contract should have the ERC721A implementation for tokens.

4. **Run the Script**: Execute the script by running `node <script_name>.js` in your terminal.

5. **Batch Minting**: The script will use the provided private key to create a signer (account) and interact with the `Robotics` contract at the specified address. It will call the `mint` function on the contract to batch mint 5 tokens.

6. **Output**: After successful execution, the script will log a message to the console indicating that 5 tokens have been minted.

# Transfer ERC721A Tokens to Ethereum FxChain Network

This script facilitates the transfer of ERC721A tokens from the Ethereum Goerli network to the Ethereum FxChain network. It requires the necessary packages and contracts to interact with both networks. The script also utilizes the `Robotics` contract for ERC721A tokens and the `fxRootContractABI` for communication with the Ethereum FxChain network.

## Prerequisites

Before executing the script, ensure you have the following:

- Install the required dependencies by running `npm install`.
- Set up a `.env` file and define the `PRIVATE_KEY` variable with the private key of the account performing the transfers.

## Execution

To transfer ERC721A tokens to the Ethereum FxChain network, follow these steps:

1. **Define the Private Key**: Set the private key of the account that will execute the transfers in the `.env` file.

2. **Network Connection**: The script is currently configured to connect to the Ethereum Goerli network using Alchemy's node (`https://eth-goerli.g.alchemy.com/v2/Bh22s-iYGmFwy-9Dq3New4jIpUES9xZt`). Ensure you have access to an Ethereum Goerli node with sufficient balance to cover gas costs.

3. **Contract Address**: Ensure that the `nft` variable in the script is set to the address of the deployed `Robotics` contract on the Ethereum Goerli network. This contract should hold the ERC721A tokens to be transferred.

4. **FXRoot Contract Address**: Verify that the `fxRootAddress` variable is set to the address of the FXRoot contract on the Ethereum FxChain network. This contract acts as the FxChildTunnel and facilitates the transfer of tokens between the Ethereum networks.

5. **Token IDs**: The `tokenIds` array should contain the token IDs to be transferred from the `Robotics` contract. Adjust this array to include the specific token IDs you want to transfer.

6. **Run the Script**: Execute the script by running `node <script_name>.js` in your terminal.

7. **Approval and Deposit**: The script will use the provided private key to create a signer (account) and interact with both the `Robotics` contract and the FXRoot contract. It will first approve the NFTs for transfer to the FxChildTunnel. Then, it will deposit the specified NFTs to the FXRoot contract on the Ethereum FxChain network.

8. **Output**: After successful execution, the script will log messages to the console confirming approval and deposit of the NFTs. It will also display the NFT wallet balance after the transfers are completed.

# ERC721A Token Balance Checker

This script allows you to check the balance of ERC721A tokens owned by a specific Ethereum wallet address. It retrieves the total number of ERC721A tokens owned by the specified wallet address from the deployed `Robotics` contract.

## Prerequisites

Before running the script, ensure you have the following:

- Install the required dependencies by running `npm install`.
- Confirm that the `tokenAddress` variable is set to the Ethereum address of the deployed `Robotics` contract on the Ethereum network you wish to interact with.
- Set the `walletAddress` variable to the Ethereum public address of the wallet for which you want to check the token balance.

## Execution

To check the ERC721A token balance, follow these steps:

1. **Contract Address**: Ensure that the `tokenAddress` variable is set to the Ethereum address of the deployed `Robotics` contract on the desired network. This contract should have the ERC721A tokens you want to check.

2. **Wallet Address**: Set the `walletAddress` variable to the Ethereum public address of the wallet for which you want to check the token balance.

3. **Run the Script**: Execute the script by running `node <script_name>.js` in your terminal.

4. **Token Balance**: The script will use Hardhat to connect to the deployed `Robotics` contract at the specified address. It will then retrieve and log the total number of ERC721A tokens owned by the specified wallet address.

**Output**: After successful execution, the script will log the total number of ERC721A tokens owned by the specified wallet address.

**Important Note**: Ensure you have access to an Ethereum node compatible with the network where the `Robotics` contract is deployed. Also, make sure you have provided the correct contract address and wallet address for accurate balance checking.

Please ensure that you handle private keys and sensitive data securely and understand the implications of querying blockchain data with the provided script. It is essential to have proper authorization and permissions for interacting with contracts on the Ethereum network.


### Author
Vinay-Kumar-Gupta

## License
MIT
