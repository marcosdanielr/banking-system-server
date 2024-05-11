import { Module } from '@nestjs/common';

import { BankAccountsController } from './bank-accounts.controller';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { BankAccountSchema } from '../@core/infra/db/bank-account.schema';
import { BankAccountService } from 'src/@core/domain/bank-account.service';
import { BankAccountTypeOrmRepository } from 'src/@core/infra/db/bank-account-typeorm.repository';
import { DataSource } from 'typeorm';
import { BankAccountsService } from './bank-accounts.service';
import { IBankAccountRepository } from '../@core/infra/db/bank-account.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccountSchema])],
  controllers: [BankAccountsController],
  providers: [
    BankAccountsService,
    {
      provide: BankAccountTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new BankAccountTypeOrmRepository(
          dataSource.getRepository(BankAccountSchema),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: BankAccountService,
      useFactory: (repository: IBankAccountRepository) => {
        return new BankAccountService(repository);
      },
      inject: [BankAccountTypeOrmRepository],
    },
  ],
})
export class BankAccountsModule {}
