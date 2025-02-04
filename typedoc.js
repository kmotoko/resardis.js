"use strict";

module.exports = {
    src: [
        "./src/Resardis.ts",
        "./src/Address.ts",
        "./src/ERC20Asset.ts",
        "./src/chains/Chain.ts",
        "./src/chains/EthereumChain.ts",
        "./src/chains/LoomChain.ts",
        "./src/config/EthereumConfig.ts",
        "./src/config/LoomConfig.ts",
        "./src/constants/index.ts",
        "./src/utils/big-number-utils.ts",
        "./src/utils/crypto-utils.ts",
        "./src/utils/ethers-utils.ts",
    ],
    mode: "file",
    includeDeclarations: true,
    tsconfig: "tsconfig.json",
    out: "./docs",
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    readme: "README.md",
    name: "resardis.js",
    ignoreCompilerErrors: true,
    listInvalidSymbolLinks: true,
};
