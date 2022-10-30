const { version } = require('chai');

/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter")
require("solidity-coverage")
/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY=process.env.PRIVATE_KEY
const goerli_rpc_url=process.env.GOERLI_RPC_URL||""
const etherscanapikey=process.env.Etherscan_api_key
const coinmarketcapapi=process.env.coinmarketcap

module.exports = {
  solidity:{
    compilers :[{version :"0.8.8"}, {version:"0.6.6"}]
  },
  defaultNetwork: "hardhat",
  networks:{
    goerli:{
    url : goerli_rpc_url,
    accounts  : [PRIVATE_KEY],
    chainId : 5,
    blockConfirmations :6,
    },
    localhost :{
      url :" http://127.0.0.1:8545/",
      chainId :31337
    }
  },
  etherscan: {
    apiKey: {
      goerli: etherscanapikey
    }
  },
  gasReporter :{
    enabled:true,
    outputFile:"gas_report.txt",
    noColors:true,
    currency:"USD",
    coinmarketcap:coinmarketcapapi
  },
  namedAccounts: {
    deployer: {
        default: 0,
    },
    player: {
        default: 1,
    },
},
};