import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv06BService } from './pp-ppv-06-b.service';
import { PpPpv06BController } from './pp-ppv-06-b.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv06BController],
  providers: [PpPpv06BService],
})
export class PpPpv06BModule {}
