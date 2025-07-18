import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv04ADto } from './create-pp-ppv-04-a.dto';

export class UpdatePpPpv04ADto extends PartialType(CreatePpPpv04ADto) {}
