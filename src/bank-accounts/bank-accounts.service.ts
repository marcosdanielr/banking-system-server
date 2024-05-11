import { Inject, Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { DataSource, Repository } from 'typeorm';
import { BankAccountSchema } from '../@core/infra/db/bank-account.schema';
import { InjectRepository, getDataSourceToken } from '@nestjs/typeorm';

@Injectable()
export class BankAccountsService {
  constructor(
    @InjectRepository(BankAccountSchema)
    private repository: Repository<BankAccountSchema>,

    @Inject(getDataSourceToken())
    private dataSource: DataSource,
  ) {}

  async create(
    createBankAccountDto: CreateBankAccountDto,
  ): Promise<BankAccountSchema> {
    const bankAccount = this.repository.create({
      account_number: createBankAccountDto.account_number,
      balance: 0,
    });

    await this.repository.insert(bankAccount);
    return bankAccount;
  }

  findAll(): Promise<BankAccountSchema[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<BankAccountSchema> {
    return this.repository.findOneBy({ id });
  }

  async transfer(from: string, to: string, amount: number): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      await queryRunner.startTransaction();

      const fromAccount = await this.repository.findOneBy({
        account_number: from,
      });
      const toAccount = await this.repository.findOneBy({ account_number: to });

      fromAccount.balance -= amount;
      toAccount.balance += amount;

      this.repository.save(fromAccount);
      this.repository.save(toAccount);

      await queryRunner.commitTransaction();
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
    }
  }
}
