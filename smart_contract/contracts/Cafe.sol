//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Cafe {
    uint256 public nftCounter;
    uint256 public userCount;
    uint256 public productCount;

    struct User {
        uint userId;
        string name;
        string email;
        address walletAddress;
        uint256 pointsBalance;
        string profileImage;
        uint[] productId;
    }

    struct NFT {
        uint nftId;
        string name;
        string description;
        uint256 tokenRequired;
        uint256 level;
        address[] owners;
    }

    struct Event {
        uint256 eventId;
        string eventName;
        string eventDate;
        string eventDesc;
        string venu;
    }

    // struct Loyalties {
    //     uint256 couponId;
    //     string expireDate;
    //     string details;
    // }

    struct Produts {
        uint256 productId;
        string name;
        string productImage;
        uint256 price;
        string productDescription;
        uint256 count;
    }

    mapping(address => User) public allUsers;
    mapping(address => bool) public isProfileSet;
    mapping(uint256 => NFT) public allNFTs;
    mapping(uint256 => Produts) public allProduct;

    function placeOrderUsingMoney(
        uint256 _productId,
        uint256 _rewards
    ) public payable {
        require(msg.sender != address(0));
        Produts memory product = allProduct[_productId];

        require(msg.value >= product.price);
        address payable owner = payable(
            0x2f8Fa2250012718CB7F66a0b804ee3f367b4BD1c
        );
        product.count += 1;

        User storage user = allUsers[msg.sender];

        user.pointsBalance += _rewards;
        owner.transfer(msg.value);
        user.productId.push(_productId);
    }

    function addUserProfile(
        string memory _name,
        string memory _email,
        string memory _profileImage
    ) external {
        require(msg.sender != address(0));

        userCount++;

        User storage userprofile = allUsers[msg.sender];

        userprofile.userId = userCount;
        userprofile.name = _name;
        userprofile.walletAddress = msg.sender;
        userprofile.email = _email;
        userprofile.profileImage = _profileImage;
        userprofile.pointsBalance = 10;

        allUsers[msg.sender] = userprofile;
        isProfileSet[msg.sender] = true;
    }

    function buyNFT(uint256 _nftId) public {
        require(isProfileSet[msg.sender], "no address");
        User storage userprofile = allUsers[msg.sender];
        NFT storage nft = allNFTs[_nftId];

        require(userprofile.pointsBalance >= nft.tokenRequired);

        userprofile.pointsBalance -= nft.tokenRequired;
        nft.owners.push(msg.sender);
    }

    function addNFT(
        string memory _name,
        string memory _details,
        uint256 _tokenRequired,
        uint256 _level
    ) public {
        nftCounter++;
        NFT storage nft = allNFTs[nftCounter];
        nft.nftId = nftCounter;
        nft.name = _name;
        nft.description = _details;
        nft.level = _level;
        nft.tokenRequired = _tokenRequired;
    }

    function addProduct(
        string memory _name,
        string memory _productDescription,
        string memory _productImage,
        uint256 _price
    ) public {
        productCount++;
        Produts memory newProduct = Produts(
            productCount,
            _name,
            _productImage,
            _price,
            _productDescription,
            0
        );

        allProduct[productCount] = newProduct;
    }
}
