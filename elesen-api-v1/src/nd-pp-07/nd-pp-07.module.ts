import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NdPp07Service } from './nd-pp-07.service';
import { NdPp07Controller } from './nd-pp-07.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [NdPp07Controller],
  providers: [NdPp07Service],
})
export class NdPp07Module {}
