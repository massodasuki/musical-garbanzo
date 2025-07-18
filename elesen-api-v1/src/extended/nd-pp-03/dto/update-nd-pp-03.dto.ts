import { PartialType } from '@nestjs/mapped-types';
import { CreateNdPp03Dto } from './create-nd-pp-03.dto';

export class UpdateNdPp03Dto extends PartialType(CreateNdPp03Dto) {}
