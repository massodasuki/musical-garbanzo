import { PartialType } from '@nestjs/mapped-types';
import { CreatePpMs02Dto } from './create-pp-ms-02.dto';

export class UpdatePpMs02Dto extends PartialType(CreatePpMs02Dto) {}
