import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv02DDto } from './create-pp-ppv-02-d.dto';

export class UpdatePpPpv02DDto extends PartialType(CreatePpPpv02DDto) {}
