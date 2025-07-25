import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPvp02CService } from './pp-pvp-02-c.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PVP-02-C (Permohonan Pembaharuan Lesen Vesel Dan Peralatan Menangkap Ikan Tahunan – Zon C/C2/MPPI/SKL)')
@Controller('/api/v1/applications/pp-pvp-02-c')
export class PpPvp02CController {
  constructor(private readonly ppPvp02CService: PpPvp02CService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPvp02CDto: CreateVesselInspectionDto) {
    return this.ppPvp02CService.create(createPpPvp02CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPvp02CService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPvp02CService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPvp02CDto: UpdateVesselInspectionDto) {
    return this.ppPvp02CService.update(noVessels, updatePpPvp02CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPvp02CService.softDelete(noVessels);
  }
  
}
