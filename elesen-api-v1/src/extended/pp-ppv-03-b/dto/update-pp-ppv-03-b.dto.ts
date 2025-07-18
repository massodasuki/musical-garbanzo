import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv03BDto } from './create-pp-ppv-03-b.dto';

export class UpdatePpPpv03BDto extends PartialType(CreatePpPpv03BDto) {}
