import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv02CService } from './pp-ppv-02-c.service';
import { PpPpv02CController } from './pp-ppv-02-c.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv02CController],
  providers: [PpPpv02CService],
})
export class PpPpv02CModule {}
