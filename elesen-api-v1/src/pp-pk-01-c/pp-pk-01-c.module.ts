import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPk01CService } from './pp-pk-01-c.service';
import { PpPk01CController } from './pp-pk-01-c.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPk01CController],
  providers: [PpPk01CService],
})
export class PpPk01CModule {}
