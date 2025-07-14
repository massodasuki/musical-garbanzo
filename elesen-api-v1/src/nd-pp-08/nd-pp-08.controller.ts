import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { NdPp08Service } from './nd-pp-08.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ND-PP-08 (Permohonan Kad Pendaftaran Nelayan Darat)')
@Controller('/api/v1/applications/nd-pp-08')
export class NdPp08Controller {
  constructor(private readonly ndPp08Service: NdPp08Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createNdPp08Dto: CreateVesselInspectionDto) {
    return this.ndPp08Service.create(createNdPp08Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ndPp08Service.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ndPp08Service.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updateNdPp08Dto: UpdateVesselInspectionDto) {
    return this.ndPp08Service.update(noTetapVesel, updateNdPp08Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ndPp08Service.softDelete(noTetapVesel);
  }
  
}
