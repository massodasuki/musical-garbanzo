import { PartialType } from '@nestjs/mapped-types';
import { CreatePpUv01ADto } from './create-pp-uv-01-a.dto';

export class UpdatePpUv01ADto extends PartialType(CreatePpUv01ADto) {}
