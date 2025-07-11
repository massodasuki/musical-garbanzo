import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv01BService } from './pp-ppv-01-b.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-01-B (Permohonan Pendaftaran Vesel Dan Peralatan Menangkap Ikan C2 – Bina Baru Luar Negara)')
@Controller('/api/v1/applications/pp-ppv-01-b')
export class PpPpv01BController {
  constructor(private readonly ppPpv01BService: PpPpv01BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv01BDto: CreateVesselInspectionDto) {
    return this.ppPpv01BService.create(createPpPpv01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv01BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv01BService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPpv01BDto: UpdateVesselInspectionDto) {
    return this.ppPpv01BService.update(noTetapVesel, updatePpPpv01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv01BService.softDelete(noTetapVesel);
  }
  
}
