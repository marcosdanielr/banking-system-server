import { BankAccount } from './bank-account';

export interface BnkAccountRepository {
  insert(bankAccount: BankAccount): Promise<void>;
}
