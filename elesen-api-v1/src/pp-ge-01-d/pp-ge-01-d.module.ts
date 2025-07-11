import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpGe01DService } from './pp-ge-01-d.service';
import { PpGe01DController } from './pp-ge-01-d.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpGe01DController],
  providers: [PpGe01DService],
})
export class PpGe01DModule {}
