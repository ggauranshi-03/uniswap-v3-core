// require('@nomiclabs/hardhat-waffle')
// require('@nomiclabs/hardhat-ethers')
// require('@nomiclabs/hardhat-etherscan')

// module.exports = {
//   defaultNetwork: 'sepolia',
//   networks: {
//     hardhat: {},
//     sepolia: {
//       url: 'https://sepolia.infura.io/v3/13322e29abd54fd19276fbdef62377f2',
//       chainId: 11155111,
//       accounts: ['cdff9d82ae22635d0f04601ee5bc0454944e9fb95d53c5817a8da3be9715358b'],
//     },
//   },

//   solidity: {
//     version: '0.7.6',
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// }
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-etherscan')

module.exports = {
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://sepolia.infura.io/v3/13322e29abd54fd19276fbdef62377f2',
      chainId: 11155111, // Correct Chain ID for Sepolia
      accounts: ['cdff9d82ae22635d0f04601ee5bc0454944e9fb95d53c5817a8da3be9715358b'],
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
