import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpGk01BService } from './pp-gk-01-b.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-GK-01-B (Permohonan Ganti Kulit - Zon B/C/C2/MPPI/SKL)')
@Controller('/api/v1/applications/pp-gk-01-b')
export class PpGk01BController {
  constructor(private readonly ppGk01BService: PpGk01BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpGk01BDto: CreateVesselInspectionDto) {
    return this.ppGk01BService.create(createPpGk01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppGk01BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppGk01BService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpGk01BDto: UpdateVesselInspectionDto) {
    return this.ppGk01BService.update(noVessels, updatePpGk01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppGk01BService.softDelete(noVessels);
  }
  
}
