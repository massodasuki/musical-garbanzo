import { PartialType } from '@nestjs/mapped-types';
import { CreatePpGe01ADto } from './create-pp-ge-01-a.dto';

export class UpdatePpGe01ADto extends PartialType(CreatePpGe01ADto) {}
