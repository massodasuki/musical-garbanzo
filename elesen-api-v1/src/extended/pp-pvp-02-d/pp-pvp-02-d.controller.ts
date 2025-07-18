import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPvp02DService } from './pp-pvp-02-d.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PVP-02-D (Permohonan Pembaharuan Lesen Vesel Dan Peralatan Menangkap Ikan Tahunan – Zon C3/Angkut)')
@Controller('/api/v1/applications/pp-pvp-02-d')
export class PpPvp02DController {
  constructor(private readonly ppPvp02DService: PpPvp02DService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPvp02DDto: CreateVesselInspectionDto) {
    return this.ppPvp02DService.create(createPpPvp02DDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPvp02DService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPvp02DService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPvp02DDto: UpdateVesselInspectionDto) {
    return this.ppPvp02DService.update(noVessels, updatePpPvp02DDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPvp02DService.softDelete(noVessels);
  }
  
}
