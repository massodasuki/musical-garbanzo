import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpPpv03BService } from './pp-ppv-03-b.service';
import { PpPpv03BController } from './pp-ppv-03-b.controller';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([VesselInspection])
    ],
  controllers: [PpPpv03BController],
  providers: [PpPpv03BService],
})
export class PpPpv03BModule {}
