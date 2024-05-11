import { BankAccount } from './bank-account';
import { IBankAccountRepository } from '../infra/db/bank-account.repository';
import { TransferService } from './transfer.service';

export class BankAccountService {
  constructor(private bankAccountRepository: IBankAccountRepository) {}

  async create(account_number: string): Promise<BankAccount> {
    const bankAccount = new BankAccount('123', 0, account_number);

    this.bankAccountRepository.insert(bankAccount);

    return bankAccount;
  }

  async transfer(
    account_number_src: string,
    account_number_dest: string,
    amount: number,
  ) {
    const bankAccountSrc =
      await this.bankAccountRepository.findByAccountNumber(account_number_src);
    const bankAccountDest =
      await this.bankAccountRepository.findByAccountNumber(account_number_dest);

    const transferService = new TransferService();

    await transferService.transfer(bankAccountSrc, bankAccountDest, amount);

    await this.bankAccountRepository.update(bankAccountSrc);
    await this.bankAccountRepository.update(bankAccountDest);
  }
}
