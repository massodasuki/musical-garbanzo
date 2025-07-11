import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpUv01AService } from './pp-uv-01-a.service';
import { PpUv01AController } from './pp-uv-01-a.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpUv01AController],
  providers: [PpUv01AService],
})
export class PpUv01AModule {}
