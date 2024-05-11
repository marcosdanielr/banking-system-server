import { Module } from '@nestjs/common';
import { BankAccountsService } from './bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountTypeOrm } from '../@core/infra/db/bank-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccountTypeOrm])],
  controllers: [BankAccountsController],
  providers: [BankAccountsService],
})
export class BankAccountsModule {}
