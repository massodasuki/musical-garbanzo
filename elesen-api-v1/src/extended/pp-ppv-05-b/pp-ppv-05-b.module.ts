import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv05BService } from './pp-ppv-05-b.service';
import { PpPpv05BController } from './pp-ppv-05-b.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv05BController],
  providers: [PpPpv05BService],
})
export class PpPpv05BModule {}
