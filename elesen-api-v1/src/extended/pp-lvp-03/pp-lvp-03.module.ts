import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpLvp03Service } from './pp-lvp-03.service';
import { PpLvp03Controller } from './pp-lvp-03.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpLvp03Controller],
  providers: [PpLvp03Service],
})
export class PpLvp03Module {}
