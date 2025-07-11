import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPm01AService } from './pp-pm-01-a.service';
import { PpPm01AController } from './pp-pm-01-a.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPm01AController],
  providers: [PpPm01AService],
})
export class PpPm01AModule {}
