import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpTz01Service } from './pp-tz-01.service';
import { PpTz01Controller } from './pp-tz-01.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpTz01Controller],
  providers: [PpTz01Service],
})
export class PpTz01Module {}
