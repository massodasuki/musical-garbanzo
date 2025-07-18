import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv02CService } from './pp-ppv-02-c.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-02-C (Permohonan Pendaftaran Vesel Dan Peralatan Menangkap Ikan C3 / Vesel Angkut – Terpakai Dalam Negara)')
@Controller('/api/v1/applications/pp-ppv-02-c')
export class PpPpv02CController {
  constructor(private readonly ppPpv02CService: PpPpv02CService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv02CDto: CreateVesselInspectionDto) {
    return this.ppPpv02CService.create(createPpPpv02CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv02CService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv02CService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPpv02CDto: UpdateVesselInspectionDto) {
    return this.ppPpv02CService.update(noTetapVesel, updatePpPpv02CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv02CService.softDelete(noTetapVesel);
  }
  
}
