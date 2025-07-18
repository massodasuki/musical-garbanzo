import { PartialType } from '@nestjs/mapped-types';
import { CreatePpKpv04BDto } from './create-pp-kpv-04-b.dto';

export class UpdatePpKpv04BDto extends PartialType(CreatePpKpv04BDto) {}
