import { Module } from '@nestjs/common';
import { VesselsService } from './vessels.service';
import { VesselsController } from './vessels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vessels } from './entities/vessel.entity';

@Module({
  imports: [
          TypeOrmModule.forFeature([Vessels])
        ],
  controllers: [VesselsController],
  providers: [VesselsService],
})
export class VesselsModule {}
