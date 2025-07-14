import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv02DService } from './pp-ppv-02-d.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-02-D (Permohonan Pendaftaran Vesel Dan Peralatan Menangkap Ikan C3 / Vesel Angkut – Terpakai Luar Negara)')
@Controller('/api/v1/applications/pp-ppv-02-d')
export class PpPpv02DController {
  constructor(private readonly ppPpv02DService: PpPpv02DService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv02DDto: CreateVesselInspectionDto) {
    return this.ppPpv02DService.create(createPpPpv02DDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv02DService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv02DService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPpv02DDto: UpdateVesselInspectionDto) {
    return this.ppPpv02DService.update(noTetapVesel, updatePpPpv02DDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv02DService.softDelete(noTetapVesel);
  }
  
}
