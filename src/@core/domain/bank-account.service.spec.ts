import { DataSource, Repository } from 'typeorm';
import { BankAccountSchema } from '../infra/db/bank-account.schema';
import { BankAccountTypeOrmRepository } from '../infra/db/bank-account-typeorm.repository';
import { BankAccountService } from './bank-account.service';

describe('Bank Account Service Test', () => {
  let dataSource: DataSource;
  let typeOrmRepository: Repository<BankAccountSchema>;
  let repository: BankAccountTypeOrmRepository;
  let sut: BankAccountService;

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
    sut = new BankAccountService(repository);
  });

  it('should be able create a new bank account', async () => {
    await sut.create('1111-11');

    const findAccountResponse = await typeOrmRepository.findOneBy({
      account_number: '1111-11',
    });

    expect(findAccountResponse.id).toBe('123');
    expect(findAccountResponse.balance).toBe(0);
    expect(findAccountResponse.account_number).toBe('1111-11');
  });
});
