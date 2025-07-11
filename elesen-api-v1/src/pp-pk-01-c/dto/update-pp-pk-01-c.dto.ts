import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPk01CDto } from './create-pp-pk-01-c.dto';

export class UpdatePpPk01CDto extends PartialType(CreatePpPk01CDto) {}
