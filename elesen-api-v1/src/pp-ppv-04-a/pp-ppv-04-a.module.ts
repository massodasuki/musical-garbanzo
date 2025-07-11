import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv04AService } from './pp-ppv-04-a.service';
import { PpPpv04AController } from './pp-ppv-04-a.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv04AController],
  providers: [PpPpv04AService],
})
export class PpPpv04AModule {}
