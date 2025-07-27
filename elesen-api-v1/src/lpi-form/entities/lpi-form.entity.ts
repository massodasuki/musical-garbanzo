import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, OneToOne } from 'typeorm';
import { LpiFormImage } from './lpi-form-image.entity';
import { Vessels } from 'src/vessels/entities/vessel.entity';

@Entity('lpi_forms')
export class LpiForm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user: string;

  @OneToMany(() => LpiFormImage, img => img.lpiForm, { cascade: true })
  images: LpiFormImage[];

  @OneToOne(() => Vessels, v => v.id, { cascade: true })
  vessels: Vessels;

  @CreateDateColumn()
  createdAt: Date;
}
