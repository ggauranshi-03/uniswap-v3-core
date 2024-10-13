// const { ethers } = require('hardhat')
// const readlineSync = require('readline-sync') // Import readline-sync for input

// async function main() {
//   // Take DEX name and owner address as input from the user
//   const dexName = readlineSync.question('Enter the name of the DEX: ')
//   const ownerAddress = readlineSync.question('Enter the owner address: ')

//   if (!dexName || !ownerAddress) {
//     throw new Error('Please provide both a DEX name and an owner address.')
//   }

//   console.log('Deploying Uniswap contracts with DEX name:', dexName)
//   console.log('Using custom owner address:', ownerAddress)

//   // Compile and deploy the UniswapV3Factory contract
//   const Factory = await ethers.getContractFactory('UniswapV3Factory')
//   const factory = await Factory.deploy(ownerAddress, dexName)

//   console.log('Uniswap Factory deployed at:', factory.address)
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error)
//     process.exit(1)
//   })
const { ethers } = require('hardhat')
const readlineSync = require('readline-sync') // Import readline-sync for input

async function main() {
  // Take DEX name and owner address as input from the user
  const dexName = readlineSync.question('Enter the name of the DEX: ')
  const ownerAddress = readlineSync.question('Enter the owner address: ')

  if (!dexName || !ownerAddress) {
    throw new Error('Please provide both a DEX name and an owner address.')
  }

  console.log('Deploying Uniswap contracts with DEX name:', dexName)
  console.log('Using custom owner address:', ownerAddress)

  // Add a provider (for Sepolia or other live network)
  const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/13322e29abd54fd19276fbdef62377f2')

  // Load your wallet's private key (replace 'YOUR_PRIVATE_KEY' with the actual key)
  const privateKey = 'cdff9d82ae22635d0f04601ee5bc0454944e9fb95d53c5817a8da3be9715358b' // Store your private key securely, do not hardcode in production
  const wallet = new ethers.Wallet(privateKey, provider)

  // Compile and deploy the UniswapV3Factory contract using the wallet (which acts as the signer)
  const Factory = await ethers.getContractFactory('UniswapV3Factory', wallet)
  const factory = await Factory.deploy(ownerAddress, dexName)

  console.log('Uniswap Factory deployed at:', factory.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
