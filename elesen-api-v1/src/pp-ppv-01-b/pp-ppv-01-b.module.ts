import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv01BService } from './pp-ppv-01-b.service';
import { PpPpv01BController } from './pp-ppv-01-b.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv01BController],
  providers: [PpPpv01BService],
})
export class PpPpv01BModule {}
