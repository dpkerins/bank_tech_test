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
}

module.exports = Account;