import type { Address, PublicClient, WalletClient } from "viem"

export type BactoryChain = "base" | "baseSepolia"

export type BactoryConfig = {
  chain: BactoryChain
  rpcUrl?: string
  factoryAddress?: Address
  publicClient?: PublicClient
  walletClient?: WalletClient
}

export type MarketModule =
  | "liquidity"
  | "yield"
  | "treasury"
  | "agents"
  | "bounties"
  | "community"

export type MarketConfig = {
  asset: Address
  quoteAsset: Address
  treasury: Address
  modules?: MarketModule[]
}

export type MarketInfo = {
  address: Address
  asset: Address
  quoteAsset: Address
  treasury: Address
  creator?: Address
  modules: MarketModule[]
}

export type CreateMarketResult = {
  marketAddress?: Address
  transactionHash?: `0x${string}`
}
