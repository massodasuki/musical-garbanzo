import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpMs02Service } from './pp-ms-02.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-MS-02 (Surat Tunjuk Sebab)')
@Controller('/api/v1/applications/pp-ms-02')
export class PpMs02Controller {
  constructor(private readonly ppMs02Service: PpMs02Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpMs02Dto: CreateVesselInspectionDto) {
    return this.ppMs02Service.create(createPpMs02Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppMs02Service.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppMs02Service.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpMs02Dto: UpdateVesselInspectionDto) {
    return this.ppMs02Service.update(noTetapVesel, updatePpMs02Dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppMs02Service.softDelete(noTetapVesel);
  }
  
}
