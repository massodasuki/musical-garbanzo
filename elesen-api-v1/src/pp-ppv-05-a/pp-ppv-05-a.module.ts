import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv05AService } from './pp-ppv-05-a.service';
import { PpPpv05AController } from './pp-ppv-05-a.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv05AController],
  providers: [PpPpv05AService],
})
export class PpPpv05AModule {}
