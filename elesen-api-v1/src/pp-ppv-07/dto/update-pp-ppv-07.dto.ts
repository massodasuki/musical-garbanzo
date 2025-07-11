import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPpv07Dto } from './create-pp-ppv-07.dto';

export class UpdatePpPpv07Dto extends PartialType(CreatePpPpv07Dto) {}
