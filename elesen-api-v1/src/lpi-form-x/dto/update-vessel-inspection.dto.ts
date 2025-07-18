import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiVesselInspectionDto } from './create-lpi-vessel-inspection.dto';

export class UpdateVesselInspectionDto extends PartialType(CreateLpiVesselInspectionDto) {}
