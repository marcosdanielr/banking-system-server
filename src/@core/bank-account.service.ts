import { BankAccount } from './domain/bank-account';
import { IBankAccountRepository } from './domain/bank-account.repository';

export class BankAccountService {
  constructor(private bankAccountRepository: IBankAccountRepository) {}

  create(account_number: string) {
    const bankAccount = new BankAccount('123', 0, account_number);

    this.bankAccountRepository.insert(bankAccount);

    return bankAccount;
  }
}
