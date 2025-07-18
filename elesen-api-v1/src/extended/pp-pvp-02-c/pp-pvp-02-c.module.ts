import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPvp02CService } from './pp-pvp-02-c.service';
import { PpPvp02CController } from './pp-pvp-02-c.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPvp02CController],
  providers: [PpPvp02CService],
})
export class PpPvp02CModule {}
