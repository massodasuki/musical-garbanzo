import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpGe01AService } from './pp-ge-01-a.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-GE-01-A (Permohonan Ganti Enjin Vesel - Sampan)')
@Controller('/api/v1/applications/pp-ge-01-a')
export class PpGe01AController {
  constructor(private readonly ppGe01AService: PpGe01AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpGe01ADto: CreateVesselInspectionDto) {
    return this.ppGe01AService.create(createPpGe01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppGe01AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppGe01AService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpGe01ADto: UpdateVesselInspectionDto) {
    return this.ppGe01AService.update(noVessels, updatePpGe01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppGe01AService.softDelete(noVessels);
  }
  
}
