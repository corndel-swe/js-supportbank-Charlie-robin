import { Command } from 'commander'
import Bill from '../models/Bill.js'

const billSplitterController = new Command('bill')

billSplitterController
  .command('split <total> <people>')
  .description('Splits Total Bill by Number of people')
  .action((total, people) => {
    const bill = new Bill(total, people)
    console.log(bill.getSplitMessage())
  })

export default billSplitterController
