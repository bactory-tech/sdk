import { Bactory } from "../src/index.js"

const bactory = new Bactory({
  chain: "baseSepolia",
  rpcUrl: process.env.BACTORY_RPC_URL
})

const market = await bactory.getMarket(
  "0x0000000000000000000000000000000000000000"
)

console.log(await market.info())
