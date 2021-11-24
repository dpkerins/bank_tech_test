class Account {
  constructor() {
    this.transactions = [];
  }
  deposit(ammount, date) {
    this.transactions.push({
      date: date,
      ammount: ammount,
      type: 'credit'
    })
  }
  withdrawal(ammount, date) {
    this.transactions.push({
      date: date,
      ammount: ammount,
      type: 'debit'
    })
  }
}

module.exports = Account;