import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpTpu01AService } from './pp-tpu-01-a.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-TPU-01-A (Permohonan Tukar Peralatan Menangkap Ikan Utama - Tradisi)')
@Controller('/api/v1/applications/pp-tpu-01-a')
export class PpTpu01AController {
  constructor(private readonly ppTpu01AService: PpTpu01AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpTpu01ADto: CreateVesselInspectionDto) {
    return this.ppTpu01AService.create(createPpTpu01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppTpu01AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppTpu01AService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpTpu01ADto: UpdateVesselInspectionDto) {
    return this.ppTpu01AService.update(noTetapVesel, updatePpTpu01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppTpu01AService.softDelete(noTetapVesel);
  }
  
}
