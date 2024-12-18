import { Command } from 'commander'
import CSVTransactionReader from '../models/transaction/CSVTransactionReader.js'
import TransactionRepository from '../models/transaction/TransactionRepository.js'

const transaction = new Command('transaction')

transaction
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    console.log(`At ${new Date().getDate()}, ${from} sent ${to} £${amount}`)
  })

transaction
  .command('summarise all')
  .description('Summarise Transactions2014.csv Transactions')
  .action(async () => {
    const transactions = await new CSVTransactionReader(
      'Transactions2014.csv'
    ).read()
    const transactionRepository = new TransactionRepository(transactions)
    console.log(transactionRepository.getTransactionMap())
  })

export default transaction
