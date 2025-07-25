import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPvp02AService } from './pp-pvp-02-a.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PVP-02-A (Permohonan Pembaharuan Lesen Vesel Dan Peralatan Menangkap Ikan Tahunan – Zon A)')
@Controller('/api/v1/applications/pp-pvp-02-a')
export class PpPvp02AController {
  constructor(private readonly ppPvp02AService: PpPvp02AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPvp02ADto: CreateVesselInspectionDto) {
    return this.ppPvp02AService.create(createPpPvp02ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPvp02AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPvp02AService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPvp02ADto: UpdateVesselInspectionDto) {
    return this.ppPvp02AService.update(noVessels, updatePpPvp02ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPvp02AService.softDelete(noVessels);
  }
  
}
