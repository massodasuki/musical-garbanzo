import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpKpv03BService } from './pp-kpv-03-b.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-KPV-03-B (Permohonan Perolehan Vesel MPPI – Terpakai Tempatan)')
@Controller('/api/v1/applications/pp-kpv-03-b')
export class PpKpv03BController {
  constructor(private readonly ppKpv03BService: PpKpv03BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpKpv03BDto: CreateVesselInspectionDto) {
    return this.ppKpv03BService.create(createPpKpv03BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppKpv03BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppKpv03BService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpKpv03BDto: UpdateVesselInspectionDto) {
    return this.ppKpv03BService.update(noTetapVesel, updatePpKpv03BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppKpv03BService.softDelete(noTetapVesel);
  }
  
}
