import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPvp02ADto } from './create-pp-pvp-02-a.dto';

export class UpdatePpPvp02ADto extends PartialType(CreatePpPvp02ADto) {}
