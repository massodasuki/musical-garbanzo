import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPk01BService } from './pp-pk-01-b.service';
import { PpPk01BController } from './pp-pk-01-b.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPk01BController],
  providers: [PpPk01BService],
})
export class PpPk01BModule {}
