import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NdPp05Service } from './nd-pp-05.service';
import { NdPp05Controller } from './nd-pp-05.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [NdPp05Controller],
  providers: [NdPp05Service],
})
export class NdPp05Module {}
