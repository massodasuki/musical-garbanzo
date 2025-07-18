import { PartialType } from '@nestjs/mapped-types';
import { CreatePpLvp02Dto } from './create-pp-lvp-02.dto';

export class UpdatePpLvp02Dto extends PartialType(CreatePpLvp02Dto) {}
