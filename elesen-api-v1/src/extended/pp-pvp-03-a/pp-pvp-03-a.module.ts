import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPvp03AService } from './pp-pvp-03-a.service';
import { PpPvp03AController } from './pp-pvp-03-a.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPvp03AController],
  providers: [PpPvp03AService],
})
export class PpPvp03AModule {}
