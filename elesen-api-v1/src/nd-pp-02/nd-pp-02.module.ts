import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NdPp02Service } from './nd-pp-02.service';
import { NdPp02Controller } from './nd-pp-02.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [NdPp02Controller],
  providers: [NdPp02Service],
})
export class NdPp02Module {}
