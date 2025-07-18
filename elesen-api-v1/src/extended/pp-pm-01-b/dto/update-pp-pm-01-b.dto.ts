import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPm01BDto } from './create-pp-pm-01-b.dto';

export class UpdatePpPm01BDto extends PartialType(CreatePpPm01BDto) {}
