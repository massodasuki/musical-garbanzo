import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { NdPp03Service } from './nd-pp-03.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ND-PP-03 (Permohonan Pindah Pangkalan)')
@Controller('/api/v1/applications/nd-pp-03')
export class NdPp03Controller {
  constructor(private readonly ndPp03Service: NdPp03Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createNdPp03Dto: CreateVesselInspectionDto) {
    return this.ndPp03Service.create(createNdPp03Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ndPp03Service.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ndPp03Service.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updateNdPp03Dto: UpdateVesselInspectionDto) {
    return this.ndPp03Service.update(noVessels, updateNdPp03Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ndPp03Service.softDelete(noVessels);
  }
  
}
