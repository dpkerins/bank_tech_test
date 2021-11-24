class Account {
  constructor() {
    this.transactions = [];
  }
  deposit(ammount, date) {
    this.transactions.push({
      date: date,
      ammount: ammount
    })
  }
  withdrawal(ammount, date) {
    this.transactions.push({
      date: date,
      ammount: -ammount
    })
  }
}

module.exports = Account;