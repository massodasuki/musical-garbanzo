import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv02AService } from './pp-ppv-02-a.service';
import { PpPpv02AController } from './pp-ppv-02-a.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv02AController],
  providers: [PpPpv02AService],
})
export class PpPpv02AModule {}
