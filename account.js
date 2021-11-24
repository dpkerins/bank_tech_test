const Deposit = require('./deposit');
const Withdrawal = require('./withdrawal');

class Account {
  constructor() {
    this.transactions = [];
  }
  deposit(ammount, date) {
    this.transactions.push(new Deposit(ammount, this.createDate(date)));
  }

  withdraw(ammount, date) {
    this.transactions.push(new Withdrawal(ammount, this.createDate(date)));
  }

  getStatement() {
    let balance = 0;
    console.log(['date || credit || debit || balance']);
    this.transactions.forEach(transaction => {
      balance = this.getNewBalance(balance, transaction.ammount)
      console.log(`${this.getDate(transaction.date)} || ${this.getCreditAmmount(transaction.ammount)} || ${this.getDebitAmmount(transaction.ammount)} || ${balance}`);
    })
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