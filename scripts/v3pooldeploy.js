async function main() {
  // Get the contract factory
  const UniswapV3Pool = await ethers.getContractFactory('UniswapV3Pool')

  // Deploy the contract (you might need to pass constructor arguments if required)
  const uniswapV3Pool = await UniswapV3Pool.deploy()

  // Wait for deployment to finish
  await uniswapV3Pool.deployed()

  console.log('UniswapV3Pool deployed to:', uniswapV3Pool.address)
}

// Execute the deploy script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
