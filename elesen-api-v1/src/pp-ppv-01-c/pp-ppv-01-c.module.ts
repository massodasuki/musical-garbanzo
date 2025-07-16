import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv01CService } from './pp-ppv-01-c.service';
import { PpPpv01CController } from './pp-ppv-01-c.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv01CController],
  providers: [PpPpv01CService],
})
export class PpPpv01CModule {}
