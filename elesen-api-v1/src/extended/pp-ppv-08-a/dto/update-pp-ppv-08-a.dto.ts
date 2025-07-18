import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv08ADto } from './create-pp-ppv-08-a.dto';

export class UpdatePpPpv08ADto extends PartialType(CreatePpPpv08ADto) {}
