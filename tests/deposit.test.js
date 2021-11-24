const Deposit = require('../deposit');

describe('Deposit', () => {
  describe('constructor()', () => {
    it('should allow user to create a deposit transaction', () => {
      const deposit = new Deposit(100, Date(10/1/23));
      expect(deposit.ammount).toEqual(-100);
      expect(deposit.date).toEqual(Date(10 / 1 / 23));
    })
  })
})

