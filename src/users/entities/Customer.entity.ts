import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255 })
  name: string;
  @Column({ length: 255 })
  lastName: string;
  @Column({ length: 255 })
  phone: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;

  @OneToOne(() => User, (user) => user.customer)
  user: User;
}
