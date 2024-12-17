import fs from 'fs/promises'

import Transaction from './Transaction.js'

class CSVTransactionReader {
  constructor(filename) {
    this.filename = filename
  }

  async read() {
    const url = new URL(`../../data/${this.filename}`, import.meta.url)
    const raw = await fs.readFile(url, 'utf-8')
    const transactions = raw
      .split('\n')
      .slice(1)
      .map((line) => {
        const [date, from, to, narrative, amount] = line.split(',')
        return new Transaction(date, from, to, narrative, new Number(amount))
      })

    return transactions
  }
}

export default CSVTransactionReader
