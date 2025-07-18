import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPk01BService } from './pp-pk-01-b.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PK-01-B (Permohonan Pindah Pangkalan Tetap – Dalam Negeri Daerah Berbeza/Wilayah Sama)')
@Controller('/api/v1/applications/pp-pk-01-b')
export class PpPk01BController {
  constructor(private readonly ppPk01BService: PpPk01BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPk01BDto: CreateVesselInspectionDto) {
    return this.ppPk01BService.create(createPpPk01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPk01BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPk01BService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPk01BDto: UpdateVesselInspectionDto) {
    return this.ppPk01BService.update(noVessels, updatePpPk01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPk01BService.softDelete(noVessels);
  }
  
}
