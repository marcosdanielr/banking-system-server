import { BankAccount } from 'src/@core/domain/bank-account';
import { BankAccountTypeOrm } from 'src/bank-accounts/entities/bank-account.entity';
import { IBankAccountRepository } from 'src/@core/domain/bank-account.repository';
import { Repository } from 'typeorm';

export class BankAccountTypeOrmRepository implements IBankAccountRepository {
  constructor(private typeOrmRepository: Repository<BankAccountTypeOrm>) {}

  async insert(bankAccount: BankAccount) {
    const model = this.typeOrmRepository.create(bankAccount);
    await this.typeOrmRepository.insert(model);
  }
}
