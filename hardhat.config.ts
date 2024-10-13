import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/13322e29abd54fd19276fbdef62377f2`,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/13322e29abd54fd19276fbdef62377f2`,
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/13322e29abd54fd19276fbdef62377f2`,
    },
  },

  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        bytecodeHash: 'none',
      },
    },
  },
}
