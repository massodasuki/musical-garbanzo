import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv08AService } from './pp-ppv-08-a.service';
import { PpPpv08AController } from './pp-ppv-08-a.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv08AController],
  providers: [PpPpv08AService],
})
export class PpPpv08AModule {}
