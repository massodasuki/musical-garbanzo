import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv08BService } from './pp-ppv-08-b.service';
import { PpPpv08BController } from './pp-ppv-08-b.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv08BController],
  providers: [PpPpv08BService],
})
export class PpPpv08BModule {}
