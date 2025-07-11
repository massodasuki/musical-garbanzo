import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpLvp08Service } from './pp-lvp-08.service';
import { PpLvp08Controller } from './pp-lvp-08.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpLvp08Controller],
  providers: [PpLvp08Service],
})
export class PpLvp08Module {}
