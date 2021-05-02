require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom drip flock tooth guard render remain unfold imitate prize frame text'; 
let testAccounts = [
"0x026d75058fa243e429c3983dc4ad2f148d0a7fed38aa60559a1e76de0792d47b",
"0x637bd96ba02baca7abfbcbb496b7124a5f553c3c3bd46648c8d1e608e0b6a68e",
"0x78811a81d196acec3c2312ac3dbd7c33a651de2c004377efe02452b72ea5799b",
"0x7ff81dc817a1e076431b454cebf5559e7a6b09d467a45e038be3d7a569ac6fea",
"0xf465918417d09885dfe81d8cd1f6a36dc9eee93c8d555abad9af62dca3a68dd8",
"0xd68bbd11bce1cff99b2d8b762b7a458bce9a09a961dd8685db2b12ea9512236c",
"0x50478376d6377cf32839dfdb3a1e73ab83b91b3ece3a8bb0a1de3afc8b9c94fc",
"0xb1f7e9943d6f3467f33c9aec9a94013c0a324352b63a3bd3717ae41f48443ff7",
"0x79b28ac320a1f671f6935ec15cb19217916c602039331d87c9481821c040c1d2",
"0xeec43f753c262487fe073105f1dd7980e28f4b515da77d5191b95c9ceae18bef"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


