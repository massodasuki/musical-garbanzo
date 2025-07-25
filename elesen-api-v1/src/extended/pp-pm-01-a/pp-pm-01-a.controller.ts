import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPm01AService } from './pp-pm-01-a.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PM-01-A (Permohonan Pindah Milik Lesen– Zon A)')
@Controller('/api/v1/applications/pp-pm-01-a')
export class PpPm01AController {
  constructor(private readonly ppPm01AService: PpPm01AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPm01ADto: CreateVesselInspectionDto) {
    return this.ppPm01AService.create(createPpPm01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPm01AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPm01AService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPm01ADto: UpdateVesselInspectionDto) {
    return this.ppPm01AService.update(noVessels, updatePpPm01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPm01AService.softDelete(noVessels);
  }
  
}
