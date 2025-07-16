import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv07Service } from './pp-ppv-07.service';
import { PpPpv07Controller } from './pp-ppv-07.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv07Controller],
  providers: [PpPpv07Service],
})
export class PpPpv07Module {}
