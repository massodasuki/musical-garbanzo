import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPm01BService } from './pp-pm-01-b.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PM-01-B (Permohonan Pindah Milik Lesen– Zon B/C/C2/C3I/MPPI)')
@Controller('/api/v1/applications/pp-pm-01-b')
export class PpPm01BController {
  constructor(private readonly ppPm01BService: PpPm01BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPm01BDto: CreateVesselInspectionDto) {
    return this.ppPm01BService.create(createPpPm01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPm01BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPm01BService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPm01BDto: UpdateVesselInspectionDto) {
    return this.ppPm01BService.update(noVessels, updatePpPm01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPm01BService.softDelete(noVessels);
  }
  
}
