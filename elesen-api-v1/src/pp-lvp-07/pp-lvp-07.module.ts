import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpLvp07Service } from './pp-lvp-07.service';
import { PpLvp07Controller } from './pp-lvp-07.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpLvp07Controller],
  providers: [PpLvp07Service],
})
export class PpLvp07Module {}
