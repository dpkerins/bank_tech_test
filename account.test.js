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
          type: 'credit',
          ammount: 100
        }
      ]);
    })
  })
})

