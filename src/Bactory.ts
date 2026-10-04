import {
  createPublicClient,
  http,
  type Address,
  type PublicClient,
  type WalletClient
} from "viem"
import { base, baseSepolia } from "viem/chains"
import { DEFAULT_CONTRACTS } from "./constants.js"
import {
  MissingFactoryAddressError,
  MissingWalletClientError
} from "./errors.js"
import { BactoryMarket } from "./market.js"
import type {
  BactoryChain,
  BactoryConfig,
  CreateMarketResult,
  MarketConfig
} from "./types.js"

export class Bactory {
  readonly chain: BactoryChain
  readonly factoryAddress?: Address
  readonly publicClient: PublicClient
  readonly walletClient?: WalletClient

  constructor(config: BactoryConfig) {
    this.chain = config.chain

    const viemChain =
      config.chain === "base"
        ? base
        : baseSepolia

    this.publicClient =
      config.publicClient ??
      createPublicClient({
        chain: viemChain,
        transport: http(config.rpcUrl)
      })

    this.walletClient = config.walletClient
    this.factoryAddress =
      config.factoryAddress ??
      DEFAULT_CONTRACTS[config.chain].factory
  }

  market(address: Address): BactoryMarket {
    return new BactoryMarket({
      address,
      publicClient: this.publicClient,
      walletClient: this.walletClient
    })
  }

  async getMarket(address: Address): Promise<BactoryMarket> {
    return this.market(address)
  }

  async createMarket(
    config: MarketConfig
  ): Promise<CreateMarketResult> {
    if (!this.factoryAddress) {
      throw new MissingFactoryAddressError()
    }

    if (!this.walletClient) {
      throw new MissingWalletClientError()
    }

    console.log("Creating Bactory market with config:", config)

    return {
      marketAddress: undefined,
      transactionHash: undefined
    }
  }
}
