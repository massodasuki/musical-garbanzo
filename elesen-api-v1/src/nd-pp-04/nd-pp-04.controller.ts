import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { NdPp04Service } from './nd-pp-04.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ND-PP-04 (Permohonan Tukar Peralatan)')
@Controller('/api/v1/applications/nd-pp-04')
export class NdPp04Controller {
  constructor(private readonly ndPp04Service: NdPp04Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createNdPp04Dto: CreateVesselInspectionDto) {
    return this.ndPp04Service.create(createNdPp04Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ndPp04Service.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ndPp04Service.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updateNdPp04Dto: UpdateVesselInspectionDto) {
    return this.ndPp04Service.update(noTetapVesel, updateNdPp04Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ndPp04Service.softDelete(noTetapVesel);
  }
  
}
