import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv01BDto } from './create-pp-ppv-01-b.dto';

export class UpdatePpPpv01BDto extends PartialType(CreatePpPpv01BDto) {}
