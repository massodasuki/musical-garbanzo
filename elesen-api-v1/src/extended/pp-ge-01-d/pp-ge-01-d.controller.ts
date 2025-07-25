import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpGe01DService } from './pp-ge-01-d.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-GE-01-D (Permohonan Ganti Enjin Vesel – Zon C3/Angkut)')
@Controller('/api/v1/applications/pp-ge-01-d')
export class PpGe01DController {
  constructor(private readonly ppGe01DService: PpGe01DService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpGe01DDto: CreateVesselInspectionDto) {
    return this.ppGe01DService.create(createPpGe01DDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppGe01DService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppGe01DService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpGe01DDto: UpdateVesselInspectionDto) {
    return this.ppGe01DService.update(noVessels, updatePpGe01DDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppGe01DService.softDelete(noVessels);
  }
  
}
