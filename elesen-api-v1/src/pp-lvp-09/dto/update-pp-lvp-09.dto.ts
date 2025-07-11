import { PartialType } from '@nestjs/mapped-types';
import { CreatePpLvp09Dto } from './create-pp-lvp-09.dto';

export class UpdatePpLvp09Dto extends PartialType(CreatePpLvp09Dto) {}
