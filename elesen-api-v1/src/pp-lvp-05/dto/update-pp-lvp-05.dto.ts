import { PartialType } from '@nestjs/mapped-types';
import { CreatePpLvp05Dto } from './create-pp-lvp-05.dto';

export class UpdatePpLvp05Dto extends PartialType(CreatePpLvp05Dto) {}
