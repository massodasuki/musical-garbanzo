import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv08BDto } from './create-pp-ppv-08-b.dto';

export class UpdatePpPpv08BDto extends PartialType(CreatePpPpv08BDto) {}
