import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpKpv04BService } from './pp-kpv-04-b.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-KPV-04-B (Permohonan Perolehan Vesel SKL – Terpakai Tempatan)')
@Controller('/api/v1/applications/pp-kpv-04-b')
export class PpKpv04BController {
  constructor(private readonly ppKpv04BService: PpKpv04BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpKpv04BDto: CreateVesselInspectionDto) {
    return this.ppKpv04BService.create(createPpKpv04BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppKpv04BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppKpv04BService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpKpv04BDto: UpdateVesselInspectionDto) {
    return this.ppKpv04BService.update(noVessels, updatePpKpv04BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppKpv04BService.softDelete(noVessels);
  }
  
}
