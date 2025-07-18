import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPm03Service } from './pp-pm-03.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PM-03 (Pindah Milik dan Pindah Pangkalan)')
@Controller('/api/v1/applications/pp-pm-03')
export class PpPm03Controller {
  constructor(private readonly ppPm03Service: PpPm03Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPm03Dto: CreateVesselInspectionDto) {
    return this.ppPm03Service.create(createPpPm03Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPm03Service.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPm03Service.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPm03Dto: UpdateVesselInspectionDto) {
    return this.ppPm03Service.update(noTetapVesel, updatePpPm03Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPm03Service.softDelete(noTetapVesel);
  }
  
}
