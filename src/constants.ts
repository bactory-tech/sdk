import type { Address } from "viem"

export const BACTORY_VERSION = "0.0.1"

export const CHAIN_IDS = {
  base: 8453,
  baseSepolia: 84532
} as const

export const DEFAULT_CONTRACTS: Record<
  keyof typeof CHAIN_IDS,
  { factory?: Address }
> = {
  base: { factory: undefined },
  baseSepolia: { factory: undefined }
}
