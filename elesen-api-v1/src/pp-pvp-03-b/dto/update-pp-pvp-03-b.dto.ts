import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPvp03BDto } from './create-pp-pvp-03-b.dto';

export class UpdatePpPvp03BDto extends PartialType(CreatePpPvp03BDto) {}
