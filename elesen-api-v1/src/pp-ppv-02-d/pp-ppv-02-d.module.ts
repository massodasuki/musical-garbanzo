import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv02DService } from './pp-ppv-02-d.service';
import { PpPpv02DController } from './pp-ppv-02-d.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv02DController],
  providers: [PpPpv02DService],
})
export class PpPpv02DModule {}
