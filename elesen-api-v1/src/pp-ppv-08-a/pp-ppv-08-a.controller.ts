import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv08AService } from './pp-ppv-08-a.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-08-A (Permohonan Pendaftaran Vesel Dan Peralatan Menangkap Ikan (Khas) – Bina Baru Dalam Negara)')
@Controller('/api/v1/applications/pp-ppv-08-a')
export class PpPpv08AController {
  constructor(private readonly ppPpv08AService: PpPpv08AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv08ADto: CreateVesselInspectionDto) {
    return this.ppPpv08AService.create(createPpPpv08ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv08AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv08AService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPpv08ADto: UpdateVesselInspectionDto) {
    return this.ppPpv08AService.update(noTetapVesel, updatePpPpv08ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv08AService.softDelete(noTetapVesel);
  }
  
}
