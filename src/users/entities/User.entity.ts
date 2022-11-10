import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from './Customer.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255 })
  name: string;
  @Column({ unique: true })
  email: string;
  @Column({ length: 255 })
  password: string;
  @Column({ length: 100 })
  role: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;

  @OneToOne(() => Customer, (customer) => customer.user, { nullable: true })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
