import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv04BDto } from './create-pp-ppv-04-b.dto';

export class UpdatePpPpv04BDto extends PartialType(CreatePpPpv04BDto) {}
