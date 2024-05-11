import { Module } from '@nestjs/common';
import { BankAccountsService } from './bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountSchema } from '../@core/infra/db/bank-account.schema';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccountSchema])],
  controllers: [BankAccountsController],
  providers: [BankAccountsService],
})
export class BankAccountsModule {}
