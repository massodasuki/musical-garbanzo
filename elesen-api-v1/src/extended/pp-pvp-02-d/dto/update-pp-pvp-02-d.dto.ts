import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPvp02DDto } from './create-pp-pvp-02-d.dto';

export class UpdatePpPvp02DDto extends PartialType(CreatePpPvp02DDto) {}
