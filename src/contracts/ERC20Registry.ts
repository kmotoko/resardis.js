import { ethers } from "ethers";

export default class ERC20Registry extends ethers.Contract {
    constructor(address: string, signerOrProvider: ethers.Signer | ethers.providers.Provider) {
        super(address, require("@resardis-finance/resardis-proxies/abis/ERC20Registry.json"), signerOrProvider);
    }
}
