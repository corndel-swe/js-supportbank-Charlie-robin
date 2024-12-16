import { Command } from 'commander'
import Interest from '../models/Interest.js'

const investment = new Command('invest')

investment
  .command('simple <amount> <rate> <years>')
  .description(
    'Calculates the projected value of the investment with simple interest.'
  )
  .action((amount, rate, years) => {
    const interest = new Interest(
      new Number(amount),
      new Number(rate),
      new Number(years)
    )

    console.log(
      'Calculating simple interest for amount: ' +
        amount +
        ', rate: ' +
        rate +
        '%, over ' +
        years +
        ' years.'
    )

    console.log(interest.simple())
  })

investment
  .command('compound <amount> <rate> <years>')
  .description(
    'Calculates the projected value of the investment with compound interest.'
  )
  .action((amount, rate, years) => {
    const interest = new Interest(
      new Number(amount),
      new Number(rate),
      new Number(years)
    )

    console.log(
      'Calculating compound interest for amount: ' +
        amount +
        ', rate: ' +
        rate +
        '%, over ' +
        years +
        ' years.'
    )

    console.log(interest.compound())
  })

export default investment
