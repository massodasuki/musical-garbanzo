import { PartialType } from '@nestjs/mapped-types';
import { CreatePpLvp08Dto } from './create-pp-lvp-08.dto';

export class UpdatePpLvp08Dto extends PartialType(CreatePpLvp08Dto) {}
