//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Cafe {
    struct User {
        string name;
        string email;
        address walletAddress;
        uint256 pointsBalance;
    }

    function placeOrder(uint256 amount) public {}
}
