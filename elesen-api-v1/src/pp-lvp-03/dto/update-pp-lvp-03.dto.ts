import { PartialType } from '@nestjs/mapped-types';
import { CreatePpLvp03Dto } from './create-pp-lvp-03.dto';

export class UpdatePpLvp03Dto extends PartialType(CreatePpLvp03Dto) {}
