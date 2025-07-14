import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPvp03BService } from './pp-pvp-03-b.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PVP-03-B (Permohonan Pembaharuan Lesen Tamat Tempoh Lebih Daripada 1 Tahun – Zon C3)')
@Controller('/api/v1/applications/pp-pvp-03-b')
export class PpPvp03BController {
  constructor(private readonly ppPvp03BService: PpPvp03BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPvp03BDto: CreateVesselInspectionDto) {
    return this.ppPvp03BService.create(createPpPvp03BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPvp03BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPvp03BService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPvp03BDto: UpdateVesselInspectionDto) {
    return this.ppPvp03BService.update(noTetapVesel, updatePpPvp03BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPvp03BService.softDelete(noTetapVesel);
  }
  
}
