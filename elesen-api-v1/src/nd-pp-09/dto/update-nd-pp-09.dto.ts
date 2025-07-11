import { PartialType } from '@nestjs/mapped-types';
import { CreateNdPp09Dto } from './create-nd-pp-09.dto';

export class UpdateNdPp09Dto extends PartialType(CreateNdPp09Dto) {}
