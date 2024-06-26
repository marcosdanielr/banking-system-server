import { BankAccount } from './bank-account';

describe('Bank Account Unit Tests', () => {
  it('should be able create bank account', () => {
    const bankAccount = new BankAccount(0, '22451');
    expect(bankAccount.id).toEqual('1');
    expect(bankAccount.balance).toEqual(0);
    expect(bankAccount.account_number).toEqual('22451');
  });

  it('should be able debit an account', () => {
    const bankAccount = new BankAccount(0, '22451');
    bankAccount.debit(50);
    expect(bankAccount.balance).toEqual(-50);
  });

  it('should be able credit an account', () => {
    const bankAccount = new BankAccount(0, '22451');
    bankAccount.credit(120);
    expect(bankAccount.balance).toEqual(120);
  });
});
