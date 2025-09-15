import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('fishing_activity')
export class FishingActivity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  user_id: string;

  @Column({ type: 'boolean', default: false })
  is_main_income: boolean;

  @Column({ type: 'varchar', length: 200, nullable: true })
  fishing_location: string;

  @Column({ type: 'int', nullable: true })
  first_registered_year: number;

  @Column({ type: 'int', nullable: true })
  fishing_days_per_month: number;

  @Column({ type: 'int', nullable: true })
  fishing_days_per_season: number;

  @Column({ type: 'int', nullable: true })
  season_length: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  annual_income_estimate: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  monthly_income_estimate: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}