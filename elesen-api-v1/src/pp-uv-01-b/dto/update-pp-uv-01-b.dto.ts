import { PartialType } from '@nestjs/mapped-types';
import { CreatePpUv01BDto } from './create-pp-uv-01-b.dto';

export class UpdatePpUv01BDto extends PartialType(CreatePpUv01BDto) {}
