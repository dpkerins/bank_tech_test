const Account = require('./account')

describe('Account', () => {
  it('should initialize with an empty transactions array', () => {
    const account = new Account;
    expect(account.transactions).toEqual([]);
  })

  describe('deposit()', () => {
    it('should allow user to create a deposit transaction', () => {
      const account = new Account;
      transactionDate = new Date(2021 - 11 - 1);
      account.deposit(100, transactionDate);
      expect(account.transactions).toEqual([
        {
          date: transactionDate,
          ammount: 100
        }
      ]);
    })
  })

  describe('withdrawal()', () => {
    it('should allow user to create a withdrawal transaction', () => {
      const account = new Account;
      transactionDate = new Date(2021 - 11 - 5);
      account.withdrawal(500, transactionDate);
      expect(account.transactions).toEqual([
        {
          date: transactionDate,
          ammount: -500
        }
      ]);
    })
  })

  describe('getStatement()', () => {
    it('should allow user to view a statement of their transactions and balances', () => {
      const account = new Account;
      transactionDate = new Date(2021 - 11 - 5);
      account.deposit(100, transactionDate);
      expect(account.getStatement()).toEqual([
        'Thu Jan 01 1970 01:00:02 GMT+0100 (Greenwich Mean Time) || 100 ||  || 100'
      ]);
    })
  })
})

