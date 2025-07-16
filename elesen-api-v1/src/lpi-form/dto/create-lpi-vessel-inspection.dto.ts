import {
  IsString, ValidateNested, IsArray, IsEnum, IsNotEmpty
} from 'class-validator';
import {
  EmpunyaVeselDto, NakhodaDto, PenandaanVeselDto, PukatTundaDto,
  ButiranVeselDto, ButiranEnjinDto, AlatKeselamatanDto,
  PeralatanMenangkapDto, PeralatanTambahanDto, KeadaanVeselDto
} from './embedded';
import { JenisBorang } from '../../common/enums/jenis-borang.enum';
import { Type } from 'class-transformer';

export class CreateLpiVesselInspectionDto {
  @IsString()
  @IsNotEmpty({ message: 'noTetapVesel is required' })
  noTetapVesel: string;

  @IsString()
  pangkalan: string;

  @IsEnum(JenisBorang, { message: 'Jenis borang tidak sah' })
  jenisBorang: JenisBorang;

  @ValidateNested()
  @Type(() => EmpunyaVeselDto)
  empunyaVesel: EmpunyaVeselDto;

  @ValidateNested()
  @Type(() => NakhodaDto)
  nakhoda: NakhodaDto;

  @ValidateNested()
  @Type(() => PenandaanVeselDto)
  penandaanVesel: PenandaanVeselDto;

  @ValidateNested()
  @Type(() => PukatTundaDto)
  pukatTunda: PukatTundaDto;

  @ValidateNested()
  @Type(() => ButiranVeselDto)
  butiranVesel: ButiranVeselDto;

  @ValidateNested()
  @Type(() => ButiranEnjinDto)
  butiranEnjin: ButiranEnjinDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AlatKeselamatanDto)
  alatKeselamatan: AlatKeselamatanDto[];

  @ValidateNested()
  @Type(() => PeralatanMenangkapDto)
  peralatanMenangkap: PeralatanMenangkapDto;

  @ValidateNested()
  @Type(() => PeralatanTambahanDto)
  peralatanTambahan: PeralatanTambahanDto;

  @ValidateNested()
  @Type(() => KeadaanVeselDto)
  keadaanVesel: KeadaanVeselDto;
}
