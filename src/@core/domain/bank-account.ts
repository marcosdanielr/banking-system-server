export class BankAccount {
  id: string;
  balance: number;
  account_number: string;

  constructor(id: string, balance: number, account_number: string) {
    this.id = id;
    this.balance = balance;
    this.account_number = account_number;
  }
}
