import { BankAccount } from './bank-account';
import { IBankAccountRepository } from './bank-account.repository';

export class BankAccountService {
  constructor(private bankAccountRepository: IBankAccountRepository) {}

  async create(account_number: string): Promise<BankAccount> {
    const bankAccount = new BankAccount('123', 0, account_number);

    this.bankAccountRepository.insert(bankAccount);

    return bankAccount;
  }
}
