import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpLvp06BService } from './pp-lvp-06-b.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-LVP-06-B (Laporan Vesel Tidak Beroperasi - Ambil Lesen)')
@Controller('/api/v1/applications/pp-lvp-06-b')
export class PpLvp06BController {
  constructor(private readonly ppLvp06BService: PpLvp06BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpLvp06BDto: CreateVesselInspectionDto) {
    return this.ppLvp06BService.create(createPpLvp06BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppLvp06BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppLvp06BService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpLvp06BDto: UpdateVesselInspectionDto) {
    return this.ppLvp06BService.update(noTetapVesel, updatePpLvp06BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppLvp06BService.softDelete(noTetapVesel);
  }
  
}
