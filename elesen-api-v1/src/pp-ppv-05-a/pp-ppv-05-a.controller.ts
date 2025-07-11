import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPpv05AService } from './pp-ppv-05-a.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PPV-05-A (Permohonan Pendaftaran Vesel MPPI – Bina Baru Dalam Negara)')
@Controller('/api/v1/applications/pp-ppv-05-a')
export class PpPpv05AController {
  constructor(private readonly ppPpv05AService: PpPpv05AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPpv05ADto: CreateVesselInspectionDto) {
    return this.ppPpv05AService.create(createPpPpv05ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPpv05AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv05AService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPpv05ADto: UpdateVesselInspectionDto) {
    return this.ppPpv05AService.update(noTetapVesel, updatePpPpv05ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPpv05AService.softDelete(noTetapVesel);
  }
  
}
