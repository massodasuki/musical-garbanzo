import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPm02Service } from './pp-pm-02.service';
import { PpPm02Controller } from './pp-pm-02.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPm02Controller],
  providers: [PpPm02Service],
})
export class PpPm02Module {}
