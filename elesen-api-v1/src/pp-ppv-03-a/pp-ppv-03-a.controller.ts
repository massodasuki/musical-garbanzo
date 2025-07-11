import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv03AService } from './pp-ppv-03-a.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-03-A (Permohonan Pendaftaran Vesel Dan Peralatan Menangkap Ikan Zon A/B – Bina Baru Dalam Negara)')
@Controller('/api/v1/applications/pp-ppv-03-a')
export class PpPpv03AController {
  constructor(private readonly ppPpv03AService: PpPpv03AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv03ADto: CreateVesselInspectionDto) {
    return this.ppPpv03AService.create(createPpPpv03ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv03AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv03AService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPpv03ADto: UpdateVesselInspectionDto) {
    return this.ppPpv03AService.update(noTetapVesel, updatePpPpv03ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv03AService.softDelete(noTetapVesel);
  }
  
}
