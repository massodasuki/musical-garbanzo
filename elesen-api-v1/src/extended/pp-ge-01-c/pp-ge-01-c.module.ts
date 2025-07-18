import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpGe01CService } from './pp-ge-01-c.service';
import { PpGe01CController } from './pp-ge-01-c.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpGe01CController],
  providers: [PpGe01CService],
})
export class PpGe01CModule {}
