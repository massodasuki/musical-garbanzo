import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPm01BService } from './pp-pm-01-b.service';
import { PpPm01BController } from './pp-pm-01-b.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPm01BController],
  providers: [PpPm01BService],
})
export class PpPm01BModule {}
