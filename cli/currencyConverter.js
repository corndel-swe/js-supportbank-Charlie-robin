import { Command } from 'commander'
import ora from 'ora'
import ExchangeRates from '../models/ExchangeRates.js'

const currencyConverter = new Command('currency')

currencyConverter
  .command('convert <amount> <from> <to>')
  .description(
    'Converts a amount from one given currency to another given currency'
  )
  .action(async (amount, from, to) => {
    const spinner = ora('Fetching Rates')
    try {
      const validAmount = Number(amount)

      if (Number.isNaN(validAmount)) {
        throw new Error(`Invalid number: ${amount}`)
      }

      const [validFrom, validTo] = [from.toUpperCase(), to.toUpperCase()]

      spinner.start()

      const exchangeRate = await ExchangeRates.get()

      const { conversion, rate } = exchangeRate.getConversionRate(
        validFrom,
        validTo,
        validAmount
      )

      spinner.stop()

      const message =
        `The current exchange rate is ${rate} between ${validFrom} ${validTo}\n` +
        `${validAmount} ${validFrom} is equivalent to ${conversion} ${validTo}`

      console.log(message)
    } catch (error) {
      if (spinner.isSpinning) {
        spinner.stop()
      }
      console.log('Oh no something has gone wrong...')
      console.error(error.message)
    }
  })

export default currencyConverter
