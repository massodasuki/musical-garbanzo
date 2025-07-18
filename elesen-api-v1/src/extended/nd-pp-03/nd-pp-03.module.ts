import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NdPp03Service } from './nd-pp-03.service';
import { NdPp03Controller } from './nd-pp-03.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [NdPp03Controller],
  providers: [NdPp03Service],
})
export class NdPp03Module {}
