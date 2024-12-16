class ExchangeRates {
  static async fetchExchangeRates() {
    const apiKey = process.env.OPEN_EXCHANGE_API_KEY

    if (!apiKey) {
      throw new Error('Missing OPEN_EXCHANGE_API_KEY environment variable')
    }

    const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `Failed to Fetch :${response.status} - ${response.statusText}`
      )
    }

    const data = await response.json()

    return data.rates || []
  }

  static async get() {
    const rates = await this.fetchExchangeRates()
    return new ExchangeRates(rates)
  }

  constructor(rates) {
    this.rates = rates
  }

  validateCurrency(currencies) {
    const unsupported = currencies.filter(
      (currency) => !(currency in this.rates)
    )

    if (unsupported.length > 0) {
      throw new Error(
        `Unsupported currencies: ${unsupported.join(', ')}.\n` +
          `Supported currencies: ${Object.keys(this.rates).join(', ')}`
      )
    }
  }

  calculate(from, to, amount) {
    this.validateCurrency([from, to])

    const fromConversion = this.rates[from]
    const toConversion = this.rates[to]
    return (amount / fromConversion) * toConversion
  }
}

export default ExchangeRates
