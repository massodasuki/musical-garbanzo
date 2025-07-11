import { PartialType } from '@nestjs/mapped-types';
import { CreateNdPp07Dto } from './create-nd-pp-07.dto';

export class UpdateNdPp07Dto extends PartialType(CreateNdPp07Dto) {}
