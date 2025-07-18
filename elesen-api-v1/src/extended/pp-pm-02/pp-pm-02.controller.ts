import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPm02Service } from './pp-pm-02.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PM-02 (Pindah Milik Harta Pusaka)')
@Controller('/api/v1/applications/pp-pm-02')
export class PpPm02Controller {
  constructor(private readonly ppPm02Service: PpPm02Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPm02Dto: CreateVesselInspectionDto) {
    return this.ppPm02Service.create(createPpPm02Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPm02Service.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPm02Service.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPm02Dto: UpdateVesselInspectionDto) {
    return this.ppPm02Service.update(noTetapVesel, updatePpPm02Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPm02Service.softDelete(noTetapVesel);
  }
  
}
