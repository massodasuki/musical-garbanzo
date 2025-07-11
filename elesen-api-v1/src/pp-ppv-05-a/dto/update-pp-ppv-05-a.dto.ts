import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv05ADto } from './create-pp-ppv-05-a.dto';

export class UpdatePpPpv05ADto extends PartialType(CreatePpPpv05ADto) {}
