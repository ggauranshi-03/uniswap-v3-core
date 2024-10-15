// const { ethers } = require('hardhat')
// async function main() {
//   // Fetch the contract to deploy
//   const UniswapV3Factory = await ethers.getContractFactory('UniswapV3Factory')

//   // Set constructor parameters
//   const dexName = 'USARDEX'
//   const dexOwner = '0x4c8D542573AB022BdB72A4Cc3113b58369Bb9a8E'

//   // Deploy the contract
//   console.log('Deploying UniswapV3Factory with the following parameters:')
//   console.log(`DEX Name: ${dexName}`)
//   console.log(`DEX Owner: ${dexOwner}`)

//   const uniswapV3Factory = await UniswapV3Factory.deploy(dexName, dexOwner)

//   // Wait for the contract to be deployed
//   await uniswapV3Factory.deployed()

//   console.log('UniswapV3Factory deployed to:', uniswapV3Factory.address)
// }

// // Execute the deployment script
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error)
//     process.exit(1)
//   })
const { ethers } = require('hardhat')
const readlineSync = require('readline-sync')

async function main() {
  // Prompt user for DEX name and owner address
  const dexName = readlineSync.question('Enter DEX Name: ')
  const dexOwner = readlineSync.question('Enter DEX Owner Address: ')

  // Fetch the contract to deploy
  const UniswapV3Factory = await ethers.getContractFactory('UniswapV3Factory')

  // Deploy the contract
  console.log('Deploying UniswapV3Factory with the following parameters:')
  console.log(`DEX Name: ${dexName}`)
  console.log(`DEX Owner: ${dexOwner}`)

  const uniswapV3Factory = await UniswapV3Factory.deploy(dexName, dexOwner)

  // Wait for the contract to be deployed
  await uniswapV3Factory.deployed()

  console.log('UniswapV3Factory deployed to:', uniswapV3Factory.address)
}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
