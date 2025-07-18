import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv06ADto } from './create-pp-ppv-06-a.dto';

export class UpdatePpPpv06ADto extends PartialType(CreatePpPpv06ADto) {}
