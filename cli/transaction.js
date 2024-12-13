import { Command } from 'commander'

const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    console.log(`At ${new Date().getDate()}, ${from} sent ${to} £${amount}`)
  })

export default transactionController
