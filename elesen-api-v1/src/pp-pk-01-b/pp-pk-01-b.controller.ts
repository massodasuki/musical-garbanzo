import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpPk01BService } from './pp-pk-01-b.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-PK-01-B (Permohonan Pindah Pangkalan Tetap – Dalam Negeri Daerah Berbeza/Wilayah Sama)')
@Controller('/api/v1/applications/pp-pk-01-b')
export class PpPk01BController {
  constructor(private readonly ppPk01BService: PpPk01BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpPk01BDto: CreateVesselInspectionDto) {
    return this.ppPk01BService.create(createPpPk01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppPk01BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPk01BService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpPk01BDto: UpdateVesselInspectionDto) {
    return this.ppPk01BService.update(noTetapVesel, updatePpPk01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppPk01BService.softDelete(noTetapVesel);
  }
  
}
