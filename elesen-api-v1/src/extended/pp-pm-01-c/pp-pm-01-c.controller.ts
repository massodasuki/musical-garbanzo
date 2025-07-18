import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPm01CService } from './pp-pm-01-c.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PM-01-C (Permohonan Pindah Milik Lesen– Kes / Rayuan)')
@Controller('/api/v1/applications/pp-pm-01-c')
export class PpPm01CController {
  constructor(private readonly ppPm01CService: PpPm01CService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPm01CDto: CreateVesselInspectionDto) {
    return this.ppPm01CService.create(createPpPm01CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPm01CService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPm01CService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPm01CDto: UpdateVesselInspectionDto) {
    return this.ppPm01CService.update(noVessels, updatePpPm01CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPm01CService.softDelete(noVessels);
  }
  
}
