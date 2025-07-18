import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv01CDto } from './create-pp-ppv-01-c.dto';

export class UpdatePpPpv01CDto extends PartialType(CreatePpPpv01CDto) {}
