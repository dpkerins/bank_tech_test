const Deposit = require('./deposit');

class Account {
  constructor() {
    this.transactions = [];
  }
  deposit(ammount, date) {
    this.transactions.push(new Deposit(ammount, this.createDate(date)));
  }

  withdrawal(ammount, date) {
    this.transactions.push({
      date: this.createDate(date),
      ammount: -ammount
    })
  }

  getStatement() {
    let balance = 0;
    let statement = ['date || credit || debit || balance'];
    this.transactions.forEach(transaction => {
      balance = this.getNewBalance(balance, transaction.ammount)
      statement.push(`${this.getDate(transaction.date)} || ${this.getCreditAmmount(transaction.ammount)} || ${this.getDebitAmmount(transaction.ammount)} || ${balance}`);
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

  createDate(date) {
    return new Date(date);
  }

  getDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

}

module.exports = Account;