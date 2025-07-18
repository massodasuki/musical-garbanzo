import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv01DDto } from './create-pp-ppv-01-d.dto';

export class UpdatePpPpv01DDto extends PartialType(CreatePpPpv01DDto) {}
