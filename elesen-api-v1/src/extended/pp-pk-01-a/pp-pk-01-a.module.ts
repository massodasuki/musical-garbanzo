import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPk01AService } from './pp-pk-01-a.service';
import { PpPk01AController } from './pp-pk-01-a.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPk01AController],
  providers: [PpPk01AService],
})
export class PpPk01AModule {}
