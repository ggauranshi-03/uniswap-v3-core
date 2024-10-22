const hre = require('hardhat')

async function main() {
  // We get the contract factory for UniswapV3PoolDeployer
  const UniswapV3PoolDeployerFactory = await hre.ethers.getContractFactory('UniswapV3PoolDeployer')

  // Deploy UniswapV3PoolDeployer contract
  const uniswapV3PoolDeployer = await UniswapV3PoolDeployerFactory.deploy()
  await uniswapV3PoolDeployer.deployed()

  console.log('UniswapV3PoolDeployer deployed to:', uniswapV3PoolDeployer.address)

  // const factory = '0x32730E658cC1754d9c40ECdaff714CFA7e3968a7'
  // const token0 = '0xdac17f958d2ee523a2206206994597c13d831ec7'
  // const token1 = '0x628f76eab0c1298f7a24d337bbbf1ef8a1ea6a24'
  // const fee = 3000
  // const tickSpacing = 60

  // // Deploy a UniswapV3Pool via the deployer
  // const tx = await uniswapV3PoolDeployer.deploy(factory, token0, token1, fee, tickSpacing)
  // await tx.wait()

  // // You can fetch the deployed pool address after successful deployment
  // const deployedPoolAddress = await uniswapV3PoolDeployer.parameters()
  // console.log('UniswapV3Pool deployed at:', deployedPoolAddress)
}

// Boilerplate to run the main function and catch any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
