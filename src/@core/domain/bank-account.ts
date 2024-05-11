import { randomUUID } from 'node:crypto';

export class BankAccount {
  readonly id: string;
  private _balance: number;
  readonly account_number: string;

  constructor(balance: number, account_number: string, id?: string) {
    this.id = id ?? randomUUID();
    this._balance = balance;
    this.account_number = account_number;
  }

  debit(amount: number): void {
    this.balance -= amount;
  }

  credit(amount: number): void {
    this.balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  private set balance(balance: number) {
    this._balance = balance;
  }
}
