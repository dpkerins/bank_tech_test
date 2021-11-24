const Account = require('../account')

describe('Account', () => {
  it('should initialize with an empty transactions array', () => {
    const account = new Account;
    expect(account.transactions).toEqual([]);
  })

  describe('deposit()', () => {
    it('should allow user to add a new deposit to their transactions array', () => {
      const account = new Account;
      transactionDate = '10-01-2023';
      account.deposit(100, transactionDate);
      expect(account.transactions.length).toEqual(1);
    })
  })

  describe('withdrawal()', () => {
    it('should allow user to create a withdrawal transaction', () => {
      const account = new Account;
      transactionDate = '10/1/23';
      account.withdrawal(500, transactionDate);
      expect(account.transactions.length).toEqual(1);
    })
  })

  describe('getStatement()', () => {
    it('should allow user to view a statement of their transactions and balances', () => {
      console.log = jest.fn();
      const account = new Account;
      transactionDate = new Date('11/5/2022');
      account.deposit(100, transactionDate);
      const expectedOutput = [
        'date || credit || debit || balance',
        '5/11/2022 || 100 ||  || 100'
      ]
      expect(account.getStatement()).toEqual(expectedOutput);
      expect(console.log).toHaveBeenCalledWith(expectedOutput);
    })
  })

  describe('createDate()', () => {
    it('should create a date object from unformatted date', () => {
      const account = new Account;
      transactionDate = '2023-10-1';
      expect(account.createDate(transactionDate)).toEqual(new Date('2023-09-30T23:00:00.000Z'));
    })
  })
})

