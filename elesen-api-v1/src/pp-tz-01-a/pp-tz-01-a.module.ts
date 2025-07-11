import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpTz01AService } from './pp-tz-01-a.service';
import { PpTz01AController } from './pp-tz-01-a.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpTz01AController],
  providers: [PpTz01AService],
})
export class PpTz01AModule {}
