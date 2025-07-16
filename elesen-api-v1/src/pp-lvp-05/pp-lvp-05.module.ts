import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpLvp05Service } from './pp-lvp-05.service';
import { PpLvp05Controller } from './pp-lvp-05.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpLvp05Controller],
  providers: [PpLvp05Service],
})
export class PpLvp05Module {}
