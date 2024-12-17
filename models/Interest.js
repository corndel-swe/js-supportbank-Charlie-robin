class Interest {
  constructor(amount, rate, years) {
    this.amount = amount
    this.rate = rate
    this.years = years
  }

  compound() {
    return this.amount * Math.pow(1 + this.rate / 100, this.years)
  }

  simple() {
    return (this.rate / 100) * this.amount * this.years + this.amount
  }
}

export default Interest;