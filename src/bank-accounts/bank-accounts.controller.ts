import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BankAccountsService } from './bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { TransferBankAccountDto } from './entities/transfer-bank-account.dto';

@Controller('bank-accounts')
export class BankAccountsController {
  constructor(private readonly bankAccountsService: BankAccountsService) {}

  @Post()
  create(@Body() createBankAccountDto: CreateBankAccountDto) {
    return this.bankAccountsService.create(createBankAccountDto);
  }

  @Get()
  findAll() {
    return this.bankAccountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankAccountsService.findOne(id);
  }

  @Post('transfer')
  @HttpCode(HttpStatus.NO_CONTENT)
  transfer(@Body() transferBankAccountDto: TransferBankAccountDto) {
    return this.bankAccountsService.transfer(
      transferBankAccountDto.from,
      transferBankAccountDto.to,
      transferBankAccountDto.amount,
    );
  }
}
