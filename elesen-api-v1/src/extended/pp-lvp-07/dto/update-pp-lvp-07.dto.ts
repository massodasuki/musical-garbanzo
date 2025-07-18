import { PartialType } from '@nestjs/mapped-types';
import { CreatePpLvp07Dto } from './create-pp-lvp-07.dto';

export class UpdatePpLvp07Dto extends PartialType(CreatePpLvp07Dto) {}
