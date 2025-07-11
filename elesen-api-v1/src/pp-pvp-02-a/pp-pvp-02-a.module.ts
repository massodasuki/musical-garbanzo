import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPvp02AService } from './pp-pvp-02-a.service';
import { PpPvp02AController } from './pp-pvp-02-a.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPvp02AController],
  providers: [PpPvp02AService],
})
export class PpPvp02AModule {}
