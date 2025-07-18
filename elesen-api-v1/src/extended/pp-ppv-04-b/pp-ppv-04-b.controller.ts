import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv04BService } from './pp-ppv-04-b.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-04-B (Permohonan Pendaftaran Vesel Dan Peralatan Menangkap Ikan Zon C – Terpakai Tempatan)')
@Controller('/api/v1/applications/pp-ppv-04-b')
export class PpPpv04BController {
  constructor(private readonly ppPpv04BService: PpPpv04BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv04BDto: CreateVesselInspectionDto) {
    return this.ppPpv04BService.create(createPpPpv04BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv04BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPpv04BService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPpv04BDto: UpdateVesselInspectionDto) {
    return this.ppPpv04BService.update(noVessels, updatePpPpv04BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPpv04BService.softDelete(noVessels);
  }
  
}
