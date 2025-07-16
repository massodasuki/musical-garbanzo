import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpLvp09Service } from './pp-lvp-09.service';
import { PpLvp09Controller } from './pp-lvp-09.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpLvp09Controller],
  providers: [PpLvp09Service],
})
export class PpLvp09Module {}
