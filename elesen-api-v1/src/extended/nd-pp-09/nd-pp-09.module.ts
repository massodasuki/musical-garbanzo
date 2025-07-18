import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NdPp09Service } from './nd-pp-09.service';
import { NdPp09Controller } from './nd-pp-09.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [NdPp09Controller],
  providers: [NdPp09Service],
})
export class NdPp09Module {}
