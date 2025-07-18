import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpGe01AService } from './pp-ge-01-a.service';
import { PpGe01AController } from './pp-ge-01-a.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpGe01AController],
  providers: [PpGe01AService],
})
export class PpGe01AModule {}
