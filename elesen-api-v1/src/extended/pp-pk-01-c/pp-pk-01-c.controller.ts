import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPk01CService } from './pp-pk-01-c.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PK-01-C (Permohonan Pindah Pangkalan Tetap – Antara Negeri)')
@Controller('/api/v1/applications/pp-pk-01-c')
export class PpPk01CController {
  constructor(private readonly ppPk01CService: PpPk01CService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPk01CDto: CreateVesselInspectionDto) {
    return this.ppPk01CService.create(createPpPk01CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPk01CService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPk01CService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPk01CDto: UpdateVesselInspectionDto) {
    return this.ppPk01CService.update(noVessels, updatePpPk01CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPk01CService.softDelete(noVessels);
  }
  
}
