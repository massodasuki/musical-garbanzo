import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPm02Dto } from './create-pp-pm-02.dto';

export class UpdatePpPm02Dto extends PartialType(CreatePpPm02Dto) {}
