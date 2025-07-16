import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv06AService } from './pp-ppv-06-a.service';
import { PpPpv06AController } from './pp-ppv-06-a.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv06AController],
  providers: [PpPpv06AService],
})
export class PpPpv06AModule {}
