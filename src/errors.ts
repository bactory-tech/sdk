export class BactoryError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "BactoryError"
  }
}

export class MissingFactoryAddressError extends BactoryError {
  constructor() {
    super("Bactory factory address is not configured.")
    this.name = "MissingFactoryAddressError"
  }
}

export class MissingWalletClientError extends BactoryError {
  constructor() {
    super("A wallet client is required for this action.")
    this.name = "MissingWalletClientError"
  }
}
