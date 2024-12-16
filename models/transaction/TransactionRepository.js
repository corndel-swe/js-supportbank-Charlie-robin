import Account from './Account.js'

class TransactionRepository {
  constructor(transactions) {
    this.transactions = transactions
  }

  async getTransactionMap() {
    return this.transactions.reduce((transactionMap, currentTransaction) => {
      const { to, from } = currentTransaction
      if (!(to in transactionMap)) {
        transactionMap[to] = new Account(to)
      }
      if (!(from in transactionMap)) {
        transactionMap[from] = new Account(from)
      }

      transactionMap[to].preformTransaction(currentTransaction)
      transactionMap[from].preformTransaction(currentTransaction)

      return transactionMap
    }, {})
  }
}

export default TransactionRepository
