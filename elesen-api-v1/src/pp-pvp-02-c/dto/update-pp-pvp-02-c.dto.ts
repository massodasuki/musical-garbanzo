import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPvp02CDto } from './create-pp-pvp-02-c.dto';

export class UpdatePpPvp02CDto extends PartialType(CreatePpPvp02CDto) {}
