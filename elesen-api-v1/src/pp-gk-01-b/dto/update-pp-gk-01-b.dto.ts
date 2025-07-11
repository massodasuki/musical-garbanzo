import { PartialType } from '@nestjs/mapped-types';
import { CreatePpGk01BDto } from './create-pp-gk-01-b.dto';

export class UpdatePpGk01BDto extends PartialType(CreatePpGk01BDto) {}
