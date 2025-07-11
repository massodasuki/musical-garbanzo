import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPvp03ADto } from './create-pp-pvp-03-a.dto';

export class UpdatePpPvp03ADto extends PartialType(CreatePpPvp03ADto) {}
