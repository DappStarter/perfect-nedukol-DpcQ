require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth ridge prosper install fork swallow gather'; 
let testAccounts = [
"0xe1150b902b4251256514240e2ae9285d0b686f8c5f9f197753b75199d69bda72",
"0xd009423b36b4f8b8b590a1b1929b545193eedccdbadb9a3c07e543b52df18e2c",
"0x348cf213524935e647a6252bfe742db8a1a83b411a4620401d69dc4d521d776f",
"0x7e706fa1ac5d6353d3654cf1611a7bdece092068727a7103c94648141046b87d",
"0xb2f17403235949dc9f7eae2e252858b32fd1ffbc6b92ef8ab6472356fc93b9ff",
"0x1f2f22b050d3cfad335ef7059030f4d32757d11f6a1d2955efa6b5a761ad3aa4",
"0x59794f4c523c8086671cecf8cc46abbc9f9e1890219e815f2dd68707b1e62a27",
"0x78062c48936cc701bc980816b8520eec5f35b4d7c6c45fca7f4b47e6d00d035d",
"0xfdb4213b2c078256c853e7c63f35091bad1049762fdb15c56f20a00bdeb06945",
"0x6cfa1b4a08eb189175a1f4973a24db950294146ffc7bfb2ddf0225c79d513c8d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

