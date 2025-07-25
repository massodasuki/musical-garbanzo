import {
  IsString,
  IsNotEmpty,
  IsOptional,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateLpiVesselInspectionDto } from './create-lpi-vessel-inspection.dto';


export class CreateLpiFormDto {
  @IsOptional() @IsString() user: string;
  @IsOptional() @IsString() formId: string;


  @IsNotEmpty()
  @ValidateNested() @Type(() => Object) part1: CreateLpiVesselInspectionDto

  @IsString() imgAType: string;
  @IsString() imgBType: string;
  @IsString() imgCType: string;
}
