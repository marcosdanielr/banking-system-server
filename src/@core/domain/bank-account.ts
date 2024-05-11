import { randomUUID } from 'node:crypto';

export class BankAccount {
  #id: string;
  #balance: number;
  #account_number: string;

  constructor(balance: number, account_number: string, id?: string) {
    this.#id = id ?? randomUUID();
    this.#balance = balance;
    this.#account_number = account_number;
  }

  debit(amount: number): void {
    this.#balance -= amount;
  }

  credit(amount: number): void {
    this.#balance += amount;
  }

  get id(): string {
    return this.#id;
  }

  get balance(): number {
    return this.#balance;
  }

  get account_number(): string {
    return this.#account_number;
  }
}
