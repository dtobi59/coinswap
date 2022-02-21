const hre = require("hardhat");

async function main() {
  
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transaction = await Transactions.deploy();

  await transaction.deployed();

  console.log("Trasaction.sol deployed to:", transaction.address);
}

( async () =>  {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})()

