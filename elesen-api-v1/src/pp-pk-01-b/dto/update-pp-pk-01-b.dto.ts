import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPk01BDto } from './create-pp-pk-01-b.dto';

export class UpdatePpPk01BDto extends PartialType(CreatePpPk01BDto) {}
