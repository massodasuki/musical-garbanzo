import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpLvp02Service } from './pp-lvp-02.service';
import { PpLvp02Controller } from './pp-lvp-02.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpLvp02Controller],
  providers: [PpLvp02Service],
})
export class PpLvp02Module {}
