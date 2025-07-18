import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPvp03BService } from './pp-pvp-03-b.service';
import { PpPvp03BController } from './pp-pvp-03-b.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPvp03BController],
  providers: [PpPvp03BService],
})
export class PpPvp03BModule {}
