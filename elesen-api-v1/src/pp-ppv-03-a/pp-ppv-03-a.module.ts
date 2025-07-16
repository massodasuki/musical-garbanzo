import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv03AService } from './pp-ppv-03-a.service';
import { PpPpv03AController } from './pp-ppv-03-a.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv03AController],
  providers: [PpPpv03AService],
})
export class PpPpv03AModule {}
