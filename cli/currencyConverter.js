import { Command } from 'commander'
import ExchangeRates from '../models/ExchangeRates.js'

const currencyConverter = new Command('currency')

currencyConverter
  .command('convert <amount> <from> <to>')
  .description('Splits Total Bill by Number of people')
  .action((amount, from, to) => {
    const exchangeRate = new ExchangeRates()
    console.log(exchangeRate.calculate(from, to, amount))
  })

export default currencyConverter
