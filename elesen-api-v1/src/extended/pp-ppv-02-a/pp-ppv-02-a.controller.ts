import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv02AService } from './pp-ppv-02-a.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-02-A (Permohonan Pendaftaran Vesel Dan Peralatan Menangkap Ikan C3 / Vesel Angkut – Bina Baru Dalam Negara)')
@Controller('/api/v1/applications/pp-ppv-02-a')
export class PpPpv02AController {
  constructor(private readonly ppPpv02AService: PpPpv02AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv02ADto: CreateVesselInspectionDto) {
    return this.ppPpv02AService.create(createPpPpv02ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv02AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.ppPpv02AService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updatePpPpv02ADto: UpdateVesselInspectionDto) {
    return this.ppPpv02AService.update(noVessels, updatePpPpv02ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.ppPpv02AService.softDelete(noVessels);
  }
  
}
