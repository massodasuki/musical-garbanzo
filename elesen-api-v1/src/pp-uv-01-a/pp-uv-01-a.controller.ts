import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpUv01AService } from './pp-uv-01-a.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-UV-01-A (Permohonan Ubahsuai Muatan Vesel – Zon A)')
@Controller('/api/v1/applications/pp-uv-01-a')
export class PpUv01AController {
  constructor(private readonly ppUv01AService: PpUv01AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpUv01ADto: CreateVesselInspectionDto) {
    return this.ppUv01AService.create(createPpUv01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppUv01AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppUv01AService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpUv01ADto: UpdateVesselInspectionDto) {
    return this.ppUv01AService.update(noTetapVesel, updatePpUv01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppUv01AService.softDelete(noTetapVesel);
  }
  
}
