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
///////////////////////////////////////////
const { ethers } = require('hardhat')
const readlineSync = require('readline-sync') // For input

async function main() {
  // Take DEX name and owner address as input from the user
  const dexName = readlineSync.question('Enter the name of the DEX: ')
  const ownerAddress = readlineSync.question('Enter the owner address: ')

  if (!dexName || !ownerAddress) {
    throw new Error('Please provide both a DEX name and an owner address.')
  }

  // Validate and format the owner address to avoid ENS resolution
  const formattedOwnerAddress = ethers.utils.getAddress(ownerAddress)

  console.log('Deploying Uniswap contracts with DEX name:', dexName)
  console.log('Using custom owner address:', formattedOwnerAddress)

  // Use getDefaultProvider to automatically select the correct network
  const provider = ethers.getDefaultProvider('sepolia', {
    infura: `13322e29abd54fd19276fbdef62377f2`, // Infura Project ID
  })

  // Create a signer using the private key and the Infura provider
  const wallet = new ethers.Wallet(`cdff9d82ae22635d0f04601ee5bc0454944e9fb95d53c5817a8da3be9715358b`, provider)

  console.log('Deploying contracts with the account:', wallet.address)

  // Compile and deploy the UniswapV3Factory contract
  const Factory = await ethers.getContractFactory('UniswapV3Factory', wallet)
  const factory = await Factory.deploy(formattedOwnerAddress, dexName)

  console.log('Uniswap Factory deployed at:', factory.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
