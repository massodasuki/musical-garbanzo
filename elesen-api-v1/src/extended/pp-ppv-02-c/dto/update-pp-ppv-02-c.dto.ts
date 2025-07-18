import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv02CDto } from './create-pp-ppv-02-c.dto';

export class UpdatePpPpv02CDto extends PartialType(CreatePpPpv02CDto) {}
