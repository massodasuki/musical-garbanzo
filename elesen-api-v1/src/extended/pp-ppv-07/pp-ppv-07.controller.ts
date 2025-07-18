import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv07Service } from './pp-ppv-07.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-07 (Permohonan Pendaftaran Sampan)')
@Controller('/api/v1/applications/pp-ppv-07')
export class PpPpv07Controller {
  constructor(private readonly ppPpv07Service: PpPpv07Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv07Dto: CreateVesselInspectionDto) {
    return this.ppPpv07Service.create(createPpPpv07Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv07Service.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPpv07Service.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPpv07Dto: UpdateVesselInspectionDto) {
    return this.ppPpv07Service.update(noVessels, updatePpPpv07Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPpv07Service.softDelete(noVessels);
  }
  
}
