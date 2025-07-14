import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv01DService } from './pp-ppv-01-d.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-01-D (Permohonan Pendaftaran Vesel Dan Peralatan Menangkap Ikan C2 – Terpakai Luar Negara)')
@Controller('/api/v1/applications/pp-ppv-01-d')
export class PpPpv01DController {
  constructor(private readonly ppPpv01DService: PpPpv01DService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv01DDto: CreateVesselInspectionDto) {
    return this.ppPpv01DService.create(createPpPpv01DDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv01DService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv01DService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPpv01DDto: UpdateVesselInspectionDto) {
    return this.ppPpv01DService.update(noTetapVesel, updatePpPpv01DDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv01DService.softDelete(noTetapVesel);
  }
  
}
