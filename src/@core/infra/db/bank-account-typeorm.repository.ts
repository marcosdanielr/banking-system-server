import { BankAccount } from 'src/@core/domain/bank-account';
import { BankAccountSchema } from './bank-account.schema';
import { IBankAccountRepository } from 'src/@core/domain/bank-account.repository';
import { Repository } from 'typeorm';

export class BankAccountTypeOrmRepository implements IBankAccountRepository {
  constructor(private typeOrmRepository: Repository<BankAccountSchema>) {}

  async insert(bankAccount: BankAccount) {
    const model = this.typeOrmRepository.create(bankAccount);
    await this.typeOrmRepository.insert(model);
  }
}
