import { PartialType } from '@nestjs/mapped-types';
import { CreateNdPp08Dto } from './create-nd-pp-08.dto';

export class UpdateNdPp08Dto extends PartialType(CreateNdPp08Dto) {}
