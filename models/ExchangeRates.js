class ExchangeRates {
  constructor() {
    this.exchangeRates = {
      'usd-gbp': 0.79,
      'gbp-usd': 1.26,
    }
  }

  calculate(from, to, amount) {
    const exchangeKey = `${from}-${to}`.toLowerCase()

    return amount * this.exchangeRates[exchangeKey]
  }
}

export default ExchangeRates
