const Withdrawal = require('../withdrawal');

describe('Withdrawal', () => {
  describe('constructor()', () => {
    it('should allow user to create a withdrawal transaction', () => {
      const withdrawal = new Withdrawal(100, Date(10/1/23));
      expect(withdrawal.ammount).toEqual(-100);
      expect(withdrawal.date).toEqual(Date(10 / 1 / 23));
    })
  })
})

