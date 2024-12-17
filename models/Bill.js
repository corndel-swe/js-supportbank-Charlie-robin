class Bill {
  constructor(total, people) {
    this.total = total
    this.people = people
  }

  getSplitMessage() {
    return `Bill total ${this.total}, split by ${this.people}: Each owes £${
      this.total / this.people
    }`
  }
}

export default Bill
