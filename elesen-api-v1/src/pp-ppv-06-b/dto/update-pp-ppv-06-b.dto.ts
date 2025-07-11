import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv06BDto } from './create-pp-ppv-06-b.dto';

export class UpdatePpPpv06BDto extends PartialType(CreatePpPpv06BDto) {}
