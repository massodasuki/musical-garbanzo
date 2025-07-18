import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpTpu01BService } from './pp-tpu-01-b.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PR-PG-01-C (Pendaftaran Pengurus Vesel)')
@Controller('/api/v1/applications/pp-tpu-01-b')
export class PpTpu01BController {
  constructor(private readonly ppTpu01BService: PpTpu01BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpTpu01BDto: CreateVesselInspectionDto) {
    return this.ppTpu01BService.create(createPpTpu01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppTpu01BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppTpu01BService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpTpu01BDto: UpdateVesselInspectionDto) {
    return this.ppTpu01BService.update(noVessels, updatePpTpu01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppTpu01BService.softDelete(noVessels);
  }
  
}
