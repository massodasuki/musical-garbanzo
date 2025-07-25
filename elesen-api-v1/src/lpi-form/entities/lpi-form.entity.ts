import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { LpiFormImage } from './lpi-form-image.entity';

@Entity('lpi_forms')
export class LpiForm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user: string;

  @Column()
  formId: string;

  @OneToMany(() => LpiFormImage, img => img.lpiForm, { cascade: true })
  images: LpiFormImage[];

  @CreateDateColumn()
  createdAt: Date;
}
