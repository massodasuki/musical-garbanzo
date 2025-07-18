import { IsString, IsNumber, IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class CreateVesselDto {
  @IsString()
  id: string;

  @IsString()
  entity_id: string;

  @IsString()
  vessel_no: string;

  @IsString()
  zone: string;

  @IsOptional()
  @IsDateString()
  start_date?: string;

  @IsOptional()
  @IsDateString()
  end_date?: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @IsOptional()
  @IsString()
  created_by?: string;
}
