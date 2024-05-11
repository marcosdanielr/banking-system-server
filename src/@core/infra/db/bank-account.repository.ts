import { BankAccount } from '../../domain/bank-account';

export interface IBankAccountRepository {
  insert(bankAccount: BankAccount): Promise<void>;
  update(bankAccount: BankAccount): Promise<void>;
  findByAccountNumber(account_number: string): Promise<BankAccount>;
}
