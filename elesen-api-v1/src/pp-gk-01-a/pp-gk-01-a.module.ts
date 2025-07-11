import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpGk01AService } from './pp-gk-01-a.service';
import { PpGk01AController } from './pp-gk-01-a.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpGk01AController],
  providers: [PpGk01AService],
})
export class PpGk01AModule {}
