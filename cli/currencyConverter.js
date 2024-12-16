import { Command } from 'commander'
import ExchangeRates from '../models/ExchangeRates.js'

const currencyConverter = new Command('currency')

currencyConverter
  .command('convert <amount> <from> <to>')
  .description(
    'Converts a amount from one given currency to another given currency'
  )
  .action(async (amount, from, to) => {
    try {
      const validAmount = Number(amount)

      if (Number.isNaN(validAmount)) {
        throw new Error(`Invalid number: ${amount}`)
      }

      const [validFrom, validTo] = [from.toUpperCase(), to.toUpperCase()]

      const exchangeRate = await ExchangeRates.get()

      const rate = exchangeRate
        .calculate(validFrom, validTo, validAmount)
        .toFixed(2)

      const message = `${validAmount} ${validFrom} is equivalent to ${rate} ${validTo}`

      console.log(message)
    } catch (error) {
      console.log('Oh no something has gone wrong...')
      console.error(error.message)
    }
  })

export default currencyConverter
