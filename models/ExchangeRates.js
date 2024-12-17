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

  validateCurrencies(currencies) {
    const unsupported = currencies.filter(
      (currency) => !(currency in this.rates)
    )

    if (unsupported.length > 0) {
      throw new Error(
        `Provided Unsupported currencies: ${unsupported.join(', ')}.\n` +
          `Supported currencies: ${Object.keys(this.rates).join(', ')}`
      )
    }
  }

  getConversionRate(from, to, amount) {
    this.validateCurrencies([from, to])

    const fromConversion = this.rates[from]

    const toConversion = this.rates[to]

    const conversion = (amount / fromConversion) * toConversion

    return {
      conversion: conversion.toFixed(2),
      rate: (conversion / amount).toFixed(2),
    }
  }
}

export default ExchangeRates
