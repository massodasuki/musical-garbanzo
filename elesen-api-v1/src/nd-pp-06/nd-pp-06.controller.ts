import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { NdPp06Service } from './nd-pp-06.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ND-PP-06 (Permohonan Ganti kulit dan Pelupusan)')
@Controller('/api/v1/applications/nd-pp-06')
export class NdPp06Controller {
  constructor(private readonly ndPp06Service: NdPp06Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createNdPp06Dto: CreateVesselInspectionDto) {
    return this.ndPp06Service.create(createNdPp06Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ndPp06Service.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ndPp06Service.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updateNdPp06Dto: UpdateVesselInspectionDto) {
    return this.ndPp06Service.update(noTetapVesel, updateNdPp06Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ndPp06Service.softDelete(noTetapVesel);
  }
  
}
