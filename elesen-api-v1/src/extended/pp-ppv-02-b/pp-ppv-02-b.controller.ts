import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv02BService } from './pp-ppv-02-b.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-02-B (Permohonan Pendaftaran Vesel Dan Peralatan Menangkap Ikan C3 / Vesel Angkut – Bina Baru Luar Negara)')
@Controller('/api/v1/applications/pp-ppv-02-b')
export class PpPpv02BController {
  constructor(private readonly ppPpv02BService: PpPpv02BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv02BDto: CreateVesselInspectionDto) {
    return this.ppPpv02BService.create(createPpPpv02BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv02BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv02BService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPpv02BDto: UpdateVesselInspectionDto) {
    return this.ppPpv02BService.update(noTetapVesel, updatePpPpv02BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv02BService.softDelete(noTetapVesel);
  }
  
}
