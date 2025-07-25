import { Module } from '@nestjs/common';
import { LpiFormService } from './lpi-form.service';
import { LpiFormController } from './lpi-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LpiFormImage } from './entities/lpi-form-image.entity';
import { LpiForm } from './entities/lpi-form.entity';
import { VesselInspection } from 'src/shared/entities/vessel-inspection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LpiForm, LpiFormImage, VesselInspection])],
  controllers: [LpiFormController],
  providers: [LpiFormService],
})
export class LpiFormModule {}