import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv01DService } from './pp-ppv-01-d.service';
import { PpPpv01DController } from './pp-ppv-01-d.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv01DController],
  providers: [PpPpv01DService],
})
export class PpPpv01DModule {}
