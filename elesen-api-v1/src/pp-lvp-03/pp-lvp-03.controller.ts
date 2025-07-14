import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpLvp03Service } from './pp-lvp-03.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-LVP-03 (Permohonan Tukar No. Pendaftaran Vesel)')
@Controller('/api/v1/applications/pp-lvp-03')
export class PpLvp03Controller {
  constructor(private readonly ppLvp03Service: PpLvp03Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpLvp03Dto: CreateVesselInspectionDto) {
    return this.ppLvp03Service.create(createPpLvp03Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppLvp03Service.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppLvp03Service.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpLvp03Dto: UpdateVesselInspectionDto) {
    return this.ppLvp03Service.update(noTetapVesel, updatePpLvp03Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppLvp03Service.softDelete(noTetapVesel);
  }
  
}
