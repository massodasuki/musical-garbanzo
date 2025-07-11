import { PartialType } from '@nestjs/mapped-types';
import { CreateNdPp02Dto } from './create-nd-pp-02.dto';

export class UpdateNdPp02Dto extends PartialType(CreateNdPp02Dto) {}
