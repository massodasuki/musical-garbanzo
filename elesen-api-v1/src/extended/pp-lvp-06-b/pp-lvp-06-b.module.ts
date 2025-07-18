import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpLvp06BService } from './pp-lvp-06-b.service';
import { PpLvp06BController } from './pp-lvp-06-b.controller';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpLvp06BController],
  providers: [PpLvp06BService],
})
export class PpLvp06BModule {}
