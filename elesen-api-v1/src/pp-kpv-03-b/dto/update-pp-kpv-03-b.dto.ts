import { PartialType } from '@nestjs/mapped-types';
import { CreatePpKpv03BDto } from './create-pp-kpv-03-b.dto';

export class UpdatePpKpv03BDto extends PartialType(CreatePpKpv03BDto) {}
