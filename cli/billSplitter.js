import { Command } from 'commander'
import Bill from '../models/Bill.js'

const billSplitterController = new Command('bill')

billSplitterController
  .command('split <total> <people> [tip]')
  .description('Splits Total Bill by Number of people')
  .action((total, people, tip) => {
    if (tip) {
      total = new Number(total) + (tip / 100) * cost
    }

    const bill = new Bill(total, people)
    console.log(bill.getSplitMessage())
  })

export default billSplitterController
