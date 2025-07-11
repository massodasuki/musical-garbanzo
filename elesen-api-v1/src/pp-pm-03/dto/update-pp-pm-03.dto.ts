import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPm03Dto } from './create-pp-pm-03.dto';

export class UpdatePpPm03Dto extends PartialType(CreatePpPm03Dto) {}
