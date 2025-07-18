import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv03ADto } from './create-pp-ppv-03-a.dto';

export class UpdatePpPpv03ADto extends PartialType(CreatePpPpv03ADto) {}
