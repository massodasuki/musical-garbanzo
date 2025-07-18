import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPk01ADto } from './create-pp-pk-01-a.dto';

export class UpdatePpPk01ADto extends PartialType(CreatePpPk01ADto) {}
