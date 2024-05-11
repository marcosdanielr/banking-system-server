import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { TransferBankAccountDto } from './dto/transfer-bank-account.dto';
import { BankAccountService } from '../@core/domain/bank-account.service';

@Controller('bank-accounts')
export class BankAccountsController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Post()
  create(@Body() createBankAccountDto: CreateBankAccountDto) {
    return this.bankAccountService.create(createBankAccountDto.account_number);
  }

  @Get()
  findAll() {
    return this.bankAccountService.findAll();
  }

  @Post('transfer')
  @HttpCode(HttpStatus.NO_CONTENT)
  transfer(@Body() transferBankAccountDto: TransferBankAccountDto) {
    return this.bankAccountService.transfer(
      transferBankAccountDto.from,
      transferBankAccountDto.to,
      transferBankAccountDto.amount,
    );
  }
}
