import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NdPp08Service } from './nd-pp-08.service';
import { NdPp08Controller } from './nd-pp-08.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [NdPp08Controller],
  providers: [NdPp08Service],
})
export class NdPp08Module {}
