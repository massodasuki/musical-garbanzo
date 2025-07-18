import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpGk01BService } from './pp-gk-01-b.service';
import { PpGk01BController } from './pp-gk-01-b.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpGk01BController],
  providers: [PpGk01BService],
})
export class PpGk01BModule {}
