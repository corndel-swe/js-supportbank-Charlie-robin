// cli/index.js
import { program } from 'commander'
import 'dotenv/config'
import transaction from './transaction.js'
import billSplitterController from './billSplitter.js'
import currencyConverter from './currencyConverter.js'
import investment from './interest.js'

program.version('0.1.0').description('SupportBank')

program.addCommand(transaction)
program.addCommand(billSplitterController)
program.addCommand(currencyConverter)
program.addCommand(investment)

program.parse(process.argv)
