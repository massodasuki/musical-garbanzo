import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPm01ADto } from './create-pp-pm-01-a.dto';

export class UpdatePpPm01ADto extends PartialType(CreatePpPm01ADto) {}
