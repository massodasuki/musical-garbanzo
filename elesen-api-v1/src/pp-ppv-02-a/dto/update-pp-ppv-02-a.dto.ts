import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv02ADto } from './create-pp-ppv-02-a.dto';

export class UpdatePpPpv02ADto extends PartialType(CreatePpPpv02ADto) {}
