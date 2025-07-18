import { PartialType } from '@nestjs/mapped-types';
import { CreatePrPg01CDto } from './create-lpi-form.dto';

export class UpdatePrPg01CDto extends PartialType(CreatePrPg01CDto) {}
