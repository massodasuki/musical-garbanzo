import { PartialType } from '@nestjs/mapped-types';
import { CreatePpTpu01ADto } from './create-pp-tpu-01-a.dto';

export class UpdatePpTpu01ADto extends PartialType(CreatePpTpu01ADto) {}
