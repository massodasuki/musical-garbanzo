import { Module } from '@nestjs/common';
import { LpiFormService } from './lpi-form.service';
import { LpiFormController } from './lpi-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LpiFormImage } from './entities/lpi-form-image.entity';
import { LpiForm } from './entities/lpi-form.entity';
import { VesselInspection } from 'src/shared/entities/vessel-inspection.entity';
import { VesselInspectionService } from './vessel-inspection.service';
import { LpiImageService } from './lpi-image.service';

@Module({
  controllers: [LpiFormController],
  imports: [
    TypeOrmModule.forFeature([LpiForm, LpiFormImage, VesselInspection]),
  ],
  providers: [LpiFormService, LpiImageService, VesselInspectionService],
  exports: [LpiFormService],
})
export class LpiFormModule {}