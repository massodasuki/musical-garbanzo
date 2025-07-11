import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NdPp06Service } from './nd-pp-06.service';
import { NdPp06Controller } from './nd-pp-06.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [NdPp06Controller],
  providers: [NdPp06Service],
})
export class NdPp06Module {}
