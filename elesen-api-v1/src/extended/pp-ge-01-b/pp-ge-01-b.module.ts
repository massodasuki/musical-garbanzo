import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpGe01BService } from './pp-ge-01-b.service';
import { PpGe01BController } from './pp-ge-01-b.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpGe01BController],
  providers: [PpGe01BService],
})
export class PpGe01BModule {}
