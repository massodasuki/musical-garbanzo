import { PartialType } from '@nestjs/mapped-types';
import { CreatePpUv01CDto } from './create-pp-uv-01-c.dto';

export class UpdatePpUv01CDto extends PartialType(CreatePpUv01CDto) {}
