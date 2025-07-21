import { Entities } from 'src/users/entities/entities.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';

@Entity('vessels')
export class Vessels {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Entities, { nullable: true })
  @JoinColumn({ name: 'entity_id' })
  entity: Entities;


  @Column()
  vessel_no: string;

  @Column()
  zone: string;

  @Column({ type: 'date', nullable: true })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Column({ default: true })
  is_active: boolean;

  @Column({ nullable: true })
  created_by: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ nullable: true })
  updated_by: number;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_by: number;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
