// const { ethers } = require('hardhat')
// const readlineSync = require('readline-sync')

// async function main() {
//   const dexName = readlineSync.question('Enter DEX Name: ')
//   const dexOwner = readlineSync.question('Enter DEX Owner Address: ')

//   const UniswapV3Factory = await ethers.getContractFactory('UniswapV3Factory')

//   console.log('Deploying UniswapV3Factory with the following parameters:')
//   console.log(`DEX Name: ${dexName}`)
//   console.log(`DEX Owner: ${dexOwner}`)

//   const uniswapV3Factory = await UniswapV3Factory.deploy(dexName, dexOwner)

//   await uniswapV3Factory.deployed()

//   console.log('UniswapV3Factory deployed to:', uniswapV3Factory.address)
// }

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

  // Verify the contract on Etherscan
  console.log('Verifying contract on Etherscan...')
  await verifyContract(uniswapV3Factory.address, [dexName, dexOwner])
}

// Function to verify the contract on Etherscan
async function verifyContract(address, constructorArguments) {
  try {
    await run('verify:verify', {
      address: address,
      constructorArguments: constructorArguments,
    })
    console.log('Contract verified successfully!')
  } catch (error) {
    console.error('Verification failed:', error.message)
  }
}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
