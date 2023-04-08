//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Cafe {
    uint256 couponCount;

    struct User {
        string name;
        string email;
        address walletAddress;
        uint256 pointsBalance;
        string profileImage;
        Loyalties[] ownedLoyalties;
        uint[] productId;
    }

    struct Event {
        uint256 eventId;
        string eventName;
        string eventDate;
        string eventDesc;
    }

    struct Loyalties {
        uint256 couponId;
        string expireDate;
        string details;
    }

    struct Produts {
        uint256 productId;
        string productDescription;
        string name;
        string productImage;
        uint256 price;
        uint256 count;
    }

    mapping(address => User) public allUsers;
    mapping(address => bool) public isProfileSet;
    mapping(uint256 => Loyalties) public allLoyalties;

    function placeOrderUsingMoney(uint256 amount, uint256 pro uint256 rewards) public {

    }

    function addUserProfile(
        string memory _name,
        string memory _email,
        string memory _profileImage
    ) public {
        require(msg.sender != address(0));

        User storage userprofile = allUsers[msg.sender];

        userprofile.name = _name;
        userprofile.walletAddress = msg.sender;
        userprofile.email = _email;
        userprofile.profileImage = _profileImage;
        userprofile.pointsBalance = 100;

        allUsers[msg.sender] = userprofile;
        isProfileSet[msg.sender] = true;
    }

    function buyLoyalties(uint256 _couponId) public {
        require(isProfileSet[msg.sender], "no address");
        Loyalties storage loyalty = allLoyalties[_couponId];

        allUsers[msg.sender].ownedLoyalties.push(loyalty);
    }

    function addLoyalty(
        string memory _expireDate,
        string memory _details
    ) public {
        couponCount++;
        Loyalties memory newLoyalty = Loyalties(
            couponCount,
            _expireDate,
            _details
        );
        allLoyalties[couponCount] = newLoyalty;
    }
}
