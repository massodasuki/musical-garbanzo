import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpUv01CService } from './pp-uv-01-c.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-UV-01-C (Permohonan Ubahsuai Muatan Vesel – Zon C3)')
@Controller('/api/v1/applications/pp-uv-01-c')
export class PpUv01CController {
  constructor(private readonly ppUv01CService: PpUv01CService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpUv01CDto: CreateVesselInspectionDto) {
    return this.ppUv01CService.create(createPpUv01CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppUv01CService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppUv01CService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpUv01CDto: UpdateVesselInspectionDto) {
    return this.ppUv01CService.update(noTetapVesel, updatePpUv01CDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppUv01CService.softDelete(noTetapVesel);
  }
  
}
