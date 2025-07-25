import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPvp03AService } from './pp-pvp-03-a.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PVP-03-A (Permohonan Pembaharuan Lesen Tamat Tempoh Lebih Daripada 1 Tahun – Kecuali Zon C3)')
@Controller('/api/v1/applications/pp-pvp-03-a')
export class PpPvp03AController {
  constructor(private readonly ppPvp03AService: PpPvp03AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPvp03ADto: CreateVesselInspectionDto) {
    return this.ppPvp03AService.create(createPpPvp03ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPvp03AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPvp03AService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPvp03ADto: UpdateVesselInspectionDto) {
    return this.ppPvp03AService.update(noVessels, updatePpPvp03ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPvp03AService.softDelete(noVessels);
  }
  
}
