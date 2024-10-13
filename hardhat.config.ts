require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')

module.exports = {
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/13322e29abd54fd19276fbdef62377f2`,
      accounts: [`cdff9d82ae22635d0f04601ee5bc0454944e9fb95d53c5817a8da3be9715358b`], // Your MetaMask private key
    },
  },
}
