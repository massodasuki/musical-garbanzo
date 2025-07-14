import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpGk01AService } from './pp-gk-01-a.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-GK-01-A (Permohonan Ganti Kulit - Sampan/Zon A)')
@Controller('/api/v1/applications/pp-gk-01-a')
export class PpGk01AController {
  constructor(private readonly ppGk01AService: PpGk01AService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpGk01ADto: CreateVesselInspectionDto) {
    return this.ppGk01AService.create(createPpGk01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppGk01AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppGk01AService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpGk01ADto: UpdateVesselInspectionDto) {
    return this.ppGk01AService.update(noTetapVesel, updatePpGk01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppGk01AService.softDelete(noTetapVesel);
  }
  
}
