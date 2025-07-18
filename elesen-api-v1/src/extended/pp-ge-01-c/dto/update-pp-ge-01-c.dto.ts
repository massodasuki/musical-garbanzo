import { PartialType } from '@nestjs/mapped-types';
import { CreatePpGe01CDto } from './create-pp-ge-01-c.dto';

export class UpdatePpGe01CDto extends PartialType(CreatePpGe01CDto) {}
