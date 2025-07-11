import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpGe01CService } from './pp-ge-01-c.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-GE-01-C (Permohonan Ganti Enjin Vesel – Zon B/C/C2/MPPI/SKL)')
@Controller('/api/v1/applications/pp-ge-01-c')
export class PpGe01CController {
  constructor(private readonly ppGe01CService: PpGe01CService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpGe01CDto: CreateVesselInspectionDto) {
    return this.ppGe01CService.create(createPpGe01CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppGe01CService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppGe01CService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpGe01CDto: UpdateVesselInspectionDto) {
    return this.ppGe01CService.update(noTetapVesel, updatePpGe01CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppGe01CService.softDelete(noTetapVesel);
  }
  
}
