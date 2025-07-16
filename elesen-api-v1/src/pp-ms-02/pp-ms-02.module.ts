import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpMs02Service } from './pp-ms-02.service';
import { PpMs02Controller } from './pp-ms-02.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpMs02Controller],
  providers: [PpMs02Service],
})
export class PpMs02Module {}
