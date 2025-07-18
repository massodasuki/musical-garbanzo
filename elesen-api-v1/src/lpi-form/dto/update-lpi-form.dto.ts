import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiFormDto } from './create-lpi-form.dto';

export class UpdatePrPg01CDto extends PartialType(CreateLpiFormDto) {}
