import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpTpu01AService } from './pp-tpu-01-a.service';
import { PpTpu01AController } from './pp-tpu-01-a.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpTpu01AController],
  providers: [PpTpu01AService],
})
export class PpTpu01AModule {}
