# resardis.js
A set of interfaces to interact with [Resardis: Crypto Finance](https://resardis.finance)'s smart contracts.

## Install

```sh
yarn add @resardis-finance/resardis.js
```
or

```sh
npm install @resardis-finance/resardis.js
```

## Getting Started
Resardis's smart contracts are deployed on [Loom Network](https://loomx.io/developers/en/intro-to-loom.html) which is a DPOS sidechain that guarantees sub-second confirmation. So most of the transactions will happen on Loom Network. However, your assets need to be transferred from Ethereum Network. So resardis.js interacts with both networks.

### Create private keys
First of all, you need to create private keys for both Ethereum Network and Loom Network.
```js
import { CryptoUtils } from "@resardis-finance/resardis.js";

const ethereumPrivateKey = CryptoUtils.createEthereumPrivateKey();
// save your ethereum private key
const loomPrivateKey = CryptoUtils.createLoomPrivateKey();
// save your loom private key
```

### Create Resardis
If you have private keys, you can create an Resardis.
```js
import Resardis from "@resardis-finance/resardis.js";

const resardis = new Resardis(ethereumPrivateKey, loomPrivateKey);
```
or, you can create Resardis using 12-words mnemonic.
```js
import Resardis from "@resardis-finance/resardis.js";

const resardis = Resardis.fromMnemonic("glove amused flock sight want basic course invite chase paper crater defense"); // example mnemonic
```

### Map accounts
Your accounts in Ethereum Network and Loom Network must be mapped before deposit/withdrawal of assets.
```js
const mapped = await resardis.areAccountsMapped();
if (!mapped) {
    await resardis.mapAccounts();
}
```

### List of ERC20 assets
You can get the list of ERC20 assets that's registered in Resardis
```js
const erc20Assets = await resardis.getLoomChain().getERC20AssetsAsync();
```

### Deposit ETH/ERC20
ETH and ERC20 assets must be deposited to Loom Network prior to using Resardis's financial services.
#### ETH
```js
import { BigNumberUtils } from "@resardis-finance/resardis.js";

const amount = BigNumberUtils.toBigNumber(10**18); // 1 ETH
const tx = await resardis.getEthereumChain().depositETHAsync(amount);
await tx.wait();
```
#### ERC20
```js
import { BigNumberUtils } from "@resardis-finance/resardis.js";

const asset = new ERC20Asset("DAIToken", "DAI", 18, "0x...", "0x..."); // DAIToken
const gateway = resardis.getEthereumChain().getGateway();
const amount = BigNumberUtils.toBigNumber(10**18); // 1 DAI
const approveTx = await resardis.getEthereumChain().approveERC20Async(asset, gateway.address, amount);
await approveTx.wait();
const depositTx = await resardis.getEthereumChain().depositERC20Async(asset, amount);
await depositTx.wait();
```

After **10 blocks** of confirmation, [transfer gateway](https://loomx.io/developers/en/transfer-gateway.html) oracle generates same amount of assets in Loom Network.

### Withdraw ETH/ERC20
ETH and ERC20 assets in Loom Network can be withdrawn to Ethereum Network.
#### ETH
```js
import { BigNumberUtils, Constants } from "@resardis-finance/resardis.js";

const amount = BigNumberUtils.toBigNumber(10**18); // 1 ETH
const ethereumGateway = resardis.getEthereumChain().getGateway().address;
const myEthereumAddress = resardis.getEthereumChain().getAddress().toLocalAddressString();
// Call to Loom Network
const tx1 = await resardis.getLoomChain().withdrawETHAsync(amount, ethereumGateway);
await tx1.wait();
// Listen to the withdrawal signature
const signature = await resardis.getLoomChain().listenToTokenWithdrawal(Constants.ZERO_ADDRESS, myEthereumAddress);
// Call to Ethereum Network
const tx2 = await resardis.getEthereumChain().withdrawETHAsync(amount, signature);
await tx2.wait();
```
#### ERC20
```js
import { BigNumberUtils } from "@resardis-finance/resardis.js";

const asset = new ERC20Asset("DAIToken", "DAI", 18, "0x...", "0x..."); // DAIToken
const amount = BigNumberUtils.toBigNumber(10**18); // 1 DAI
// Call to Loom Network
const tx1 = await resardis.getLoomChain().withdrawERC20Async(asset, amount);
await tx1.wait();
// Listen to the withdrawal signature
const signature = await resardis.getLoomChain().listenToTokenWithdrawal(asset.ethereumAddress.toLocalAddressString(), myEthereumAddress);
// Call to Ethereum Network
const tx2 = await resardis.getEthereumChain().withdrawERC20Async(asset, amount, signature);
await tx2.wait();
```
`LoomChain.listenToWithdrawal()` waits for 120 seconds then it times out if no withdrawal signature is generated.

### Start Savings
Now if you have DAIs in Loom Network, you can start savings.
```js
const loomChain = resardis.getLoomChain();
const market = loomChain.getMoneyMarket();
const asset = await market.asset(); // DAIToken
const amount = BigNumberUtils.toBigNumber(10**18); // 1 DAI
const approveTx = await loomChain.approveERC20Async(asset, market.address, amount);
await approveTx.wait();
const depositTx = await market.deposit(amount);
await depositTx.wait();
```

### Get Savings Records
You can get the list of savings deposited.
```js
const myLoomAddress = resardis.getLoomChain().getAddress().toLocalAddressString();
const savingRecords = await market.getSavingsRecords(myLoomAddress);
const recordId = savingRecords[0].id;
```

### Withdraw Savings
You can withdraw some or all amount of savings deposited.
```js
const loomChain = resardis.getLoomChain();
const market = loomChain.getMoneyMarket();
const amount = BigNumberUtils.toBigNumber(10**18); // 1 DAI
const tx = await market.withdraw(recordId, amount);
await tx.wait();
```

## Author

👤 **[@YoonjaeYoo](https://github.com/YoonjaeYoo)**

