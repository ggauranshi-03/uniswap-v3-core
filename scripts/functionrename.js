const fs = require('fs')
const path = require('path')
const readline = require('readline')

const contractPath = 'contracts/UniswapV3Factory.sol'
const interfacePath = 'contracts/interfaces/IUniswapV3Factory.sol'

function readSolidityFile(filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

function writeSolidityFile(filePath, data) {
  fs.writeFileSync(filePath, data)
}

function getFunctionNames(contractContent) {
  const regex = /function\s+([a-zA-Z_][a-zA-Z0-9_]*)/g
  let matches
  const functions = []
  while ((matches = regex.exec(contractContent)) !== null) {
    functions.push(matches[1])
  }
  return functions
}

function replaceFunctionNames(content, oldName, newName) {
  const regex = new RegExp(`\\b${oldName}\\b`, 'g')
  return content.replace(regex, newName)
}

async function promptUserForNewNames(functions) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const newNames = {}
  for (const func of functions) {
    newNames[func] = await new Promise((resolve) => {
      rl.question(`What would you like to rename the function "${func}"? (press enter to skip): `, (newName) => {
        resolve(newName || func)
      })
    })
  }

  rl.close()
  return newNames
}

async function main() {
  console.log('Reading the contract and interface files...')
  let contractContent = readSolidityFile(contractPath)
  let interfaceContent = readSolidityFile(interfacePath)

  const functions = getFunctionNames(contractContent)
  console.log('Functions found:', functions)

  const newNames = await promptUserForNewNames(functions)

  for (const [oldName, newName] of Object.entries(newNames)) {
    if (oldName !== newName) {
      console.log(`Renaming function ${oldName} to ${newName}`)
      contractContent = replaceFunctionNames(contractContent, oldName, newName)
      interfaceContent = replaceFunctionNames(interfaceContent, oldName, newName)
    }
  }

  writeSolidityFile(contractPath, contractContent)
  writeSolidityFile(interfacePath, interfaceContent)

  console.log('Contract and interface updated with new function names.')

  console.log('Compiling the contract...')
  await compileContract()

  console.log('Deploying the contract...')
  await deployContract()
}

async function compileContract() {
  const { execSync } = require('child_process')
  try {
    execSync('npx hardhat compile', { stdio: 'inherit' })
  } catch (error) {
    console.error('Error during compilation:', error)
    process.exit(1)
  }
}

async function deployContract() {
  const hre = require('hardhat')
  const [deployer] = await hre.ethers.getSigners()

  console.log('Deploying contract with the account:', deployer.address)

  const Factory = await hre.ethers.getContractFactory('UniswapV3Factory')
  const factory = await Factory.deploy('MyDex', deployer.address)

  await factory.deployed()

  console.log('UniswapV3Factory deployed to:', factory.address)
}

main().catch((error) => {
  console.error('Error in the script:', error)
  process.exit(1)
})
