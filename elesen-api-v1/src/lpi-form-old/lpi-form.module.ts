import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LpiFormService } from './lpi-form.service';
import { LpiFormController } from './lpi-form.controller';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [LpiFormController],
  providers: [LpiFormService],
})
export class LpiFormModule {}
