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

  getStatement() {
    let balance = 0;
    let statement = ['date || credit || debit || balance'];
    this.transactions.forEach(transaction => {
      balance = this.getNewBalance(balance, transaction.ammount)
      statement.push(`${transaction.date} || ${this.getCreditAmmount(transaction.ammount)} || ${this.getDebitAmmount(transaction.ammount)} || ${balance}`);
    })
    console.log(statement);
    return statement;
  }

  getDebitAmmount(ammount) {
    if (ammount > 0) {
      return "";
    } else {
      return Math.abs(ammount);
    }

  }

  getCreditAmmount(ammount) {
    if (ammount > 0) {
      return ammount;
    } else {
      return "";
    }
  }

  getNewBalance(currentBalance, transaction) {
    return currentBalance + transaction
  }
}

module.exports = Account;