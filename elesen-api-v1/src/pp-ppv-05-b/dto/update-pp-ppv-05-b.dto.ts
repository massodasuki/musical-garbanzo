import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv05BDto } from './create-pp-ppv-05-b.dto';

export class UpdatePpPpv05BDto extends PartialType(CreatePpPpv05BDto) {}
