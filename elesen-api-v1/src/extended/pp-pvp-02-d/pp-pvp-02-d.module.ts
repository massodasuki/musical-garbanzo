import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPvp02DService } from './pp-pvp-02-d.service';
import { PpPvp02DController } from './pp-pvp-02-d.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPvp02DController],
  providers: [PpPvp02DService],
})
export class PpPvp02DModule {}
