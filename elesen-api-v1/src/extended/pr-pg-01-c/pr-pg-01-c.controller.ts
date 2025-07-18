import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PrPg01CService } from './pr-pg-01-c.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PR-PG-01-C (Pendaftaran Pengurus Vesel)')
@Controller('/api/v1/applications/pr-pg-01-c')
export class PrPg01CController {
  constructor(private readonly prPg01CService: PrPg01CService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPrPg01CDto: CreateVesselInspectionDto) {
    return this.prPg01CService.create(createPrPg01CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.prPg01CService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.prPg01CService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePrPg01CDto: UpdateVesselInspectionDto) {
    return this.prPg01CService.update(noVessels, updatePrPg01CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.prPg01CService.softDelete(noVessels);
  }
  
}
