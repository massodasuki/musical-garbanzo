import { PartialType } from '@nestjs/mapped-types';
import { CreatePpGe01DDto } from './create-pp-ge-01-d.dto';

export class UpdatePpGe01DDto extends PartialType(CreatePpGe01DDto) {}
