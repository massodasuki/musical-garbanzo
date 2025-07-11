import { PartialType } from '@nestjs/mapped-types';
import { CreatePpGk01ADto } from './create-pp-gk-01-a.dto';

export class UpdatePpGk01ADto extends PartialType(CreatePpGk01ADto) {}
