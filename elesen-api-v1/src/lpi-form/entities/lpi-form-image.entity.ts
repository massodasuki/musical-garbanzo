import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { LpiForm } from './lpi-form.entity';

@Entity('lpi_form_images')
export class LpiFormImage {
   @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column()
  filename: string;

  @Column()
  path: string;

  @ManyToOne(() => LpiForm, form => form.images)
  lpiForm: LpiForm;
}
