import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPm03Service } from './pp-pm-03.service';
import { PpPm03Controller } from './pp-pm-03.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPm03Controller],
  providers: [PpPm03Service],
})
export class PpPm03Module {}
