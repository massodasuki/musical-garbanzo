import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NdPp04Service } from './nd-pp-04.service';
import { NdPp04Controller } from './nd-pp-04.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [NdPp04Controller],
  providers: [NdPp04Service],
})
export class NdPp04Module {}
