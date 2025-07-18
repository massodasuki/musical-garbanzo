import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpTz01Service } from './pp-tz-01.service';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-TZ-01 (Permohonan Tukar Zon)')
@Controller('/api/v1/applications/pp-tz-01')
export class PpTz01Controller {
  constructor(private readonly ppTz01AService: PpTz01Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpTz01ADto: CreateVesselInspectionDto) {
    return this.ppTz01AService.create(createPpTz01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppTz01AService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppTz01AService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpTz01ADto: UpdateVesselInspectionDto) {
    return this.ppTz01AService.update(noTetapVesel, updatePpTz01ADto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppTz01AService.softDelete(noTetapVesel);
  }
  
}
