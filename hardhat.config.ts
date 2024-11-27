
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()
module.exports = {
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://sepolia.infura.io/v3/13322e29abd54fd19276fbdef62377f2',
      chainId: 11155111, // Correct Chain ID for Sepolia
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: '3TUMJ66ABKRV3BUQN6IBFYYTN9QXNM4ZTF',
    customChains: [
      {
        network: 'sepolia',
        chainId: 11155111,
        urls: {
          apiURL: 'https://api-sepolia.etherscan.io/api',
          browserURL: 'https://sepolia.etherscan.io',
        },
      },
    ],
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
