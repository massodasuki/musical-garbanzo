import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpLvp02Service } from './pp-lvp-02.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-LVP-02 (Permohonan Penggantian Lesen/Geran)')
@Controller('/api/v1/applications/pp-lvp-02')
export class PpLvp02Controller {
  constructor(private readonly ppLvp02Service: PpLvp02Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpLvp02Dto: CreateVesselInspectionDto) {
    return this.ppLvp02Service.create(createPpLvp02Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppLvp02Service.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppLvp02Service.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpLvp02Dto: UpdateVesselInspectionDto) {
    return this.ppLvp02Service.update(noTetapVesel, updatePpLvp02Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppLvp02Service.softDelete(noTetapVesel);
  }
  
}
