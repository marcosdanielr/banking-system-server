import { BankAccount } from 'src/@core/domain/bank-account';
import { BankAccountSchema } from './bank-account.schema';
import { IBankAccountRepository } from './bank-account.repository';
import { Repository } from 'typeorm';

export class BankAccountTypeOrmRepository implements IBankAccountRepository {
  constructor(private typeOrmRepository: Repository<BankAccountSchema>) {}

  async insert(bankAccount: BankAccount) {
    const model = this.typeOrmRepository.create(bankAccount);
    await this.typeOrmRepository.insert(model);
  }

  async update(bankAccount: BankAccount) {
    await this.typeOrmRepository.update(bankAccount.id, {
      balance: bankAccount.balance,
    });
  }

  async findByAccountNumber(account_number: string) {
    const model = await this.typeOrmRepository.findOneBy({ account_number });

    return new BankAccount(model.balance, model.account_number, model.id);
  }

  async findAll() {
    return await this.typeOrmRepository.find();
  }
}
