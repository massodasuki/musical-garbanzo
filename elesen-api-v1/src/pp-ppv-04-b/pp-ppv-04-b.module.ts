import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv04BService } from './pp-ppv-04-b.service';
import { PpPpv04BController } from './pp-ppv-04-b.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv04BController],
  providers: [PpPpv04BService],
})
export class PpPpv04BModule {}
