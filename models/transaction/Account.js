class Account {
  constructor(username) {
    this.username = username
    this.transactionHistory = []
    this.balance = 0
  }

  preformTransaction(transaction) {
    if (transaction.to === this.username) {
      this.balance += transaction.amount
    }
    if (transaction.from === this.username) {
      this.balance -= transaction.amount
    }

    this.transactionHistory.push(transaction)
  }
}

export default Account
