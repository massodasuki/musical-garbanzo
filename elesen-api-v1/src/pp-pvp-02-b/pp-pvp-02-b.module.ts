import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPvp02BService } from './pp-pvp-02-b.service';
import { PpPvp02BController } from './pp-pvp-02-b.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPvp02BController],
  providers: [PpPvp02BService],
})
export class PpPvp02BModule {}
