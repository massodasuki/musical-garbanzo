import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPvp02BDto } from './create-pp-pvp-02-b.dto';

export class UpdatePpPvp02BDto extends PartialType(CreatePpPvp02BDto) {}
