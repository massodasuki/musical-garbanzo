import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv02BService } from './pp-ppv-02-b.service';
import { PpPpv02BController } from './pp-ppv-02-b.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv02BController],
  providers: [PpPpv02BService],
})
export class PpPpv02BModule {}
