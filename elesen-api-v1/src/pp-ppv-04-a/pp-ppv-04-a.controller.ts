import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv04AService } from './pp-ppv-04-a.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-04-A (Permohonan Pendaftaran Vesel Dan Peralatan Menangkap Ikan Zon C – Bina Baru Dalam Negara)')
@Controller('/api/v1/applications/pp-ppv-04-a')
export class PpPpv04AController {
  constructor(private readonly ppPpv04AService: PpPpv04AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv04ADto: CreateVesselInspectionDto) {
    return this.ppPpv04AService.create(createPpPpv04ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv04AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv04AService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPpv04ADto: UpdateVesselInspectionDto) {
    return this.ppPpv04AService.update(noTetapVesel, updatePpPpv04ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv04AService.softDelete(noTetapVesel);
  }
  
}
