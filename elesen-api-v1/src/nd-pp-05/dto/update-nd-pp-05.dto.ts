import { PartialType } from '@nestjs/mapped-types';
import { CreateNdPp05Dto } from './create-nd-pp-05.dto';

export class UpdateNdPp05Dto extends PartialType(CreateNdPp05Dto) {}
