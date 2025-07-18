import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv02BDto } from './create-pp-ppv-02-b.dto';

export class UpdatePpPpv02BDto extends PartialType(CreatePpPpv02BDto) {}
