import { formatEther, parseEther } from "viem";
import hre from "hardhat";

async function main() {
  const loyalty = await hre.viem.deployContract("Loyalty", []);

  console.log(
    `Loyalty deployed to ${loyalty.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
