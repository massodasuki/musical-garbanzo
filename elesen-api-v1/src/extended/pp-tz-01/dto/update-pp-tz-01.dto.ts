import { PartialType } from '@nestjs/mapped-types';
import { CreatePpTz01ADto } from './create-pp-tz-01.dto';

export class UpdatePpTz01ADto extends PartialType(CreatePpTz01ADto) {}
