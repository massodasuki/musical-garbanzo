import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('financial')
export class Financial {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  user_id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  bank_name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  branch: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  account_no: string;

  @Column({ type: 'boolean', default: false })
  bantuan_elaun_sara_hidup: boolean;

  @Column({ type: 'boolean', default: false })
  bantuan: boolean;

  @Column({ type: 'boolean', default: false })
  kwsp: boolean;

  @Column({ type: 'boolean', default: false })
  pencen: boolean;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
