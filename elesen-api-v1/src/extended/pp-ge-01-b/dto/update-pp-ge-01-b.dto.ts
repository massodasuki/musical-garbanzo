import { PartialType } from '@nestjs/mapped-types';
import { CreatePpGe01BDto } from './create-pp-ge-01-b.dto';

export class UpdatePpGe01BDto extends PartialType(CreatePpGe01BDto) {}
