import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPvp02BService } from './pp-pvp-02-b.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PVP-02-B (Permohonan Pembaharuan Lesen Vesel Dan Peralatan Menangkap Ikan Tahunan – Zon B)')
@Controller('/api/v1/applications/pp-pvp-02-b')
export class PpPvp02BController {
  constructor(private readonly ppPvp02BService: PpPvp02BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPvp02BDto: CreateVesselInspectionDto) {
    return this.ppPvp02BService.create(createPpPvp02BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPvp02BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPvp02BService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPvp02BDto: UpdateVesselInspectionDto) {
    return this.ppPvp02BService.update(noVessels, updatePpPvp02BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPvp02BService.softDelete(noVessels);
  }
  
}
