import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpUv01BService } from './pp-uv-01-b.service';
import { PpUv01BController } from './pp-uv-01-b.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpUv01BController],
  providers: [PpUv01BService],
})
export class PpUv01BModule {}
