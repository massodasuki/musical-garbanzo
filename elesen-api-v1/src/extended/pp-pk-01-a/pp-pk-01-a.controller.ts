import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPk01AService } from './pp-pk-01-a.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PK-01-A (Permohonan Pindah Pangkalan Tetap – Daerah Sama)')
@Controller('/api/v1/applications/pp-pk-01-a')
export class PpPk01AController {
  constructor(private readonly ppPk01AService: PpPk01AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPk01ADto: CreateVesselInspectionDto) {
    return this.ppPk01AService.create(createPpPk01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPk01AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPk01AService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPk01ADto: UpdateVesselInspectionDto) {
    return this.ppPk01AService.update(noVessels, updatePpPk01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPk01AService.softDelete(noVessels);
  }
  
}
