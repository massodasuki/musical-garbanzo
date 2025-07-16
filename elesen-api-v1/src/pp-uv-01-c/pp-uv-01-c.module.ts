import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpUv01CService } from './pp-uv-01-c.service';
import { PpUv01CController } from './pp-uv-01-c.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpUv01CController],
  providers: [PpUv01CService],
})
export class PpUv01CModule {}
