import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv01ADto } from './create-pp-ppv-01-a.dto';

export class UpdatePpPpv01ADto extends PartialType(CreatePpPpv01ADto) {}
