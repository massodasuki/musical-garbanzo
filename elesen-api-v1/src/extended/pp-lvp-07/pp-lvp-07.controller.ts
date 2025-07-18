import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpLvp07Service } from './pp-lvp-07.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-LVP-07 (Permohonan Lesen Pukat Tunda Musim Tengkujuh)')
@Controller('/api/v1/applications/pp-lvp-07')
export class PpLvp07Controller {
  constructor(private readonly ppLvp07Service: PpLvp07Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpLvp07Dto: CreateVesselInspectionDto) {
    return this.ppLvp07Service.create(createPpLvp07Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppLvp07Service.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppLvp07Service.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpLvp07Dto: UpdateVesselInspectionDto) {
    return this.ppLvp07Service.update(noVessels, updatePpLvp07Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppLvp07Service.softDelete(noVessels);
  }
  
}
