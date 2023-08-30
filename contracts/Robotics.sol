// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Import the ERC721A contract
import "erc721a/contracts/ERC721A.sol";

contract Robotics is ERC721A {
    address public owner;
    uint256 public maxQuantity = 5;
    string public prompt = "Welcome to the world of Robotics";
    
    string baseUrl_1 ="https://gateway.pinata.cloud/ipfs/QmU2ZKpK2J9EoQCeQxYgnbqgDYaaimc3uXCtXGgYLdBypE/";
    string baseUrl_2="https://gateway.pinata.cloud/ipfs/QmWbSnC4nLiSKmy4kZwdceg7yDuwPPPytF1oHcQxpEFGmE/";
    string baseUrl_3="https://gateway.pinata.cloud/ipfs/QmaU8SR8CTrawYozBaRme3goUx5MUpmBkFtK4hNYaAEN6m/";
    string baseUrl_4="https://gateway.pinata.cloud/ipfs/QmUBqdAtDEutssF9JkXjdH5Thw2gcoFd6anTtWdUiUffBw/";
    string baseUrl_5="https://gateway.pinata.cloud/ipfs/QmPLXQTzX5U2F2ZrCRinhGWN2NMe6pDWi2KPu2BdSkMxk4/";
    
    

    constructor() ERC721A("Robotics", "RBT") {
        owner = msg.sender;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "Can be performed only by the owner.");
        _;
    }
    function mint(uint256 quantity) external payable onlyOwner {
        require(totalSupply() + quantity <= maxQuantity,"You can not mint more than 5 NFTs"
        );
        _mint(msg.sender, quantity);
    }
}