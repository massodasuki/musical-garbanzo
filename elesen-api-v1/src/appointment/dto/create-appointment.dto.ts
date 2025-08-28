import { IsDate, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { StatusJanjiTemu, StatusLaporan, StatusKehadiran, Dihadiri } from '../entities/appointment.entity';

export class CreateAppointmentDto {
  @IsDate()
  tarikhPemeriksaan: Date;

  @IsOptional()
  @IsEnum(StatusJanjiTemu)
  status?: StatusJanjiTemu;

  @IsOptional()
  @IsEnum(StatusLaporan)
  penyediaanLaporan?: StatusLaporan;

  @IsOptional()
  @IsEnum(StatusKehadiran)
  kehadiran?: StatusKehadiran;

  @IsOptional()
  @IsEnum(Dihadiri)
  dihadiri?: Dihadiri;

  @IsOptional()
  @IsUUID()
  vesselId?: string;

  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsUUID()
  staffId?: string;

  @IsOptional()
  @IsUUID()
  serviceId?: string;
}
