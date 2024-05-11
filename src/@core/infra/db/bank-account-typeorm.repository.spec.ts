import { DataSource, Repository } from 'typeorm';
import { BankAccountTypeOrmRepository } from './bank-account-typeorm.repository';
import { BankAccount } from '../../domain/bank-account';
import { BankAccountSchema } from './bank-account.schema';

describe('Bank Account Repository Test', () => {
  let dataSource: DataSource;
  let typeOrmRepository: Repository<BankAccountSchema>;
  let repository: BankAccountTypeOrmRepository;

  beforeEach(async () => {
    dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: true,
      entities: [BankAccountSchema],
    });

    await dataSource.initialize();

    typeOrmRepository = dataSource.getRepository(BankAccountSchema);
    repository = new BankAccountTypeOrmRepository(typeOrmRepository);
  });

  it('should be able insert a new bank account', async () => {
    const bankAccount = new BankAccount(100, '1111-11');
    await repository.insert(bankAccount);

    const findAccountResponse = await typeOrmRepository.findOneBy({
      account_number: '1111-11',
    });

    expect(findAccountResponse.balance).toBe(100);
    expect(findAccountResponse.account_number).toBe('1111-11');
  });
});
