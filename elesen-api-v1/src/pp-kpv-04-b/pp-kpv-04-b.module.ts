import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpKpv04BService } from './pp-kpv-04-b.service';
import { PpKpv04BController } from './pp-kpv-04-b.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpKpv04BController],
  providers: [PpKpv04BService],
})
export class PpKpv04BModule {}
