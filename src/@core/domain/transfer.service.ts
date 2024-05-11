import { BankAccount } from './bank-account';

export class TransferService {
  async transfer(
    account_number_src: BankAccount,
    account_number_dest: BankAccount,
    amount: number,
  ) {
    account_number_src.debit(amount);
    account_number_dest.credit(amount);
  }
}
