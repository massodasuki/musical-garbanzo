import { PartialType } from '@nestjs/mapped-types';
import { CreateNdPp06Dto } from './create-nd-pp-06.dto';

export class UpdateNdPp06Dto extends PartialType(CreateNdPp06Dto) {}
