import type { Address, PublicClient, WalletClient } from "viem"
import type { MarketInfo, MarketModule } from "./types.js"

export class BactoryMarket {
  readonly address: Address
  readonly publicClient: PublicClient
  readonly walletClient?: WalletClient

  constructor(args: {
    address: Address
    publicClient: PublicClient
    walletClient?: WalletClient
  }) {
    this.address = args.address
    this.publicClient = args.publicClient
    this.walletClient = args.walletClient
  }

  async info(): Promise<MarketInfo> {
    return {
      address: this.address,
      asset: "0x0000000000000000000000000000000000000000",
      quoteAsset: "0x0000000000000000000000000000000000000000",
      treasury: "0x0000000000000000000000000000000000000000",
      modules: []
    }
  }

  async isModuleActive(module: MarketModule): Promise<boolean> {
    return (await this.info()).modules.includes(module)
  }
}
