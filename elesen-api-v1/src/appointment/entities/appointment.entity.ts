import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Vessels } from 'src/vessels/entities/vessel.entity';

export enum StatusJanjiTemu {
  SCHEDULED = 'Dijadualkan',
  COMPLETED = 'Selesai',
  CANCELLED = 'Batal',
}

export enum StatusLaporan {
  PENDING = 'Dalam Semakan',
  APPROVED = 'Disokong'
}

export enum StatusKehadiran {
  PRESENT = 'Hadir',
  ABSENT = 'Tidak Hadir',
  POSTPONE = 'Tangguh Pemeriksaan',
}

//attended
export enum Dihadiri {
  OWNER = 'Pemilik',
  REPRESENTATIVE = 'Wakil'
}

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tarikhPemeriksaan: Date;

  @Column({
    type: 'enum',
    enum: StatusJanjiTemu,
    default: StatusJanjiTemu.SCHEDULED,
  })
  status: StatusJanjiTemu;

  @Column({
    type: 'enum',
    enum: StatusLaporan,
    default: StatusLaporan.PENDING,
  })
  penyediaanLaporan: StatusLaporan;

  @Column({
    type: 'enum',
    enum: StatusKehadiran,
    default: StatusKehadiran.POSTPONE,
  })
  kehadiran: StatusKehadiran;

  @Column({
    type: 'enum',
    enum: Dihadiri,
    default: Dihadiri.OWNER,
  })
  dihadiri: Dihadiri;

  @ManyToOne(() => Vessels, { nullable: true })
  @JoinColumn({ name: 'vessel_id' })
  vessel: Vessels;
}