import { PartialType } from '@nestjs/mapped-types';
import { CreatePpLvp06BDto } from './create-pp-lvp-06-b.dto';

export class UpdatePpLvp06BDto extends PartialType(CreatePpLvp06BDto) {}
