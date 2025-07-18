import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpKpv03BService } from './pp-kpv-03-b.service';
import { PpKpv03BController } from './pp-kpv-03-b.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpKpv03BController],
  providers: [PpKpv03BService],
})
export class PpKpv03BModule {}
