import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPm01CService } from './pp-pm-01-c.service';
import { PpPm01CController } from './pp-pm-01-c.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPm01CController],
  providers: [PpPm01CService],
})
export class PpPm01CModule {}
