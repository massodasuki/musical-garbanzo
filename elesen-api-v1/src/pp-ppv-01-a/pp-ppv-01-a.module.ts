import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv01AService } from './pp-ppv-01-a.service';
import { PpPpv01AController } from './pp-ppv-01-a.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv01AController],
  providers: [PpPpv01AService],
})
export class PpPpv01AModule {}
