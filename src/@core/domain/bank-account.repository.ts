import { BankAccount } from './bank-account';

export interface IBankAccountRepository {
  insert(bankAccount: BankAccount): Promise<void>;
}
