import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BankAccountTypeOrm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', scale: 2 })
  balance: number;

  @Column({ length: 255 })
  account_number: string;
}
