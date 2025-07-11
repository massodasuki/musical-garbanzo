import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv03BService } from './pp-ppv-03-b.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-03-B (Permohonan Pendaftaran Vesel Dan Peralatan Menangkap Ikan Zon A/B – Terpakai Tempatan)')
@Controller('/api/v1/applications/pp-ppv-03-b')
export class PpPpv03BController {
  constructor(private readonly ppPpv03BService: PpPpv03BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv03BDto: CreateVesselInspectionDto) {
    return this.ppPpv03BService.create(createPpPpv03BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv03BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv03BService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPpv03BDto: UpdateVesselInspectionDto) {
    return this.ppPpv03BService.update(noTetapVesel, updatePpPpv03BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv03BService.softDelete(noTetapVesel);
  }
  
}
