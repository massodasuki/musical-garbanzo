import { PartialType } from '@nestjs/mapped-types';
import { CreateNdPp04Dto } from './create-nd-pp-04.dto';

export class UpdateNdPp04Dto extends PartialType(CreateNdPp04Dto) {}
