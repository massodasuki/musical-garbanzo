import { PartialType } from '@nestjs/mapped-types';
import { CreatePpTpu01BDto } from './create-pp-tpu-01-b.dto';

export class UpdatePpTpu01BDto extends PartialType(CreatePpTpu01BDto) {}
