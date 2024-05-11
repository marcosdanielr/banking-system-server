import { BankAccount } from './bank-account';

describe('Bank Account Unit Tests', () => {
  it('should be able create bank account', () => {
    const bankAccount = new BankAccount('1', 0, '22451');
    expect(bankAccount.id).toEqual('1');
    expect(bankAccount.balance).toEqual(0);
    expect(bankAccount.account_number).toEqual('22451');
  });
});
