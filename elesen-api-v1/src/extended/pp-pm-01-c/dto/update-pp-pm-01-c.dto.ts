import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPm01CDto } from './create-pp-pm-01-c.dto';

export class UpdatePpPm01CDto extends PartialType(CreatePpPm01CDto) {}
