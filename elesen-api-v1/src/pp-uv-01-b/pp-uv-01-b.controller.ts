import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpUv01BService } from './pp-uv-01-b.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-UV-01-B (Permohonan Ubahsuai Muatan Vesel – Zon B/C/C2/MPPI/SKL)')
@Controller('/api/v1/applications/pp-uv-01-b')
export class PpUv01BController {
  constructor(private readonly ppUv01BService: PpUv01BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpUv01BDto: CreateVesselInspectionDto) {
    return this.ppUv01BService.create(createPpUv01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppUv01BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppUv01BService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpUv01BDto: UpdateVesselInspectionDto) {
    return this.ppUv01BService.update(noTetapVesel, updatePpUv01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppUv01BService.softDelete(noTetapVesel);
  }
  
}
