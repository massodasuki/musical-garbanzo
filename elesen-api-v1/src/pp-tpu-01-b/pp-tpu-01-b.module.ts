import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpTpu01BService } from './pp-tpu-01-b.service';
import { PpTpu01BController } from './pp-tpu-01-b.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpTpu01BController],
  providers: [PpTpu01BService],
})
export class PpTpu01BModule {}
