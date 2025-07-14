import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpKpv04BService } from './pp-kpv-04-b.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PP-KPV-04-B (Permohonan Perolehan Vesel SKL – Terpakai Tempatan)')
@Controller('/api/v1/applications/pp-kpv-04-b')
export class PpKpv04BController {
  constructor(private readonly ppKpv04BService: PpKpv04BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpKpv04BDto: CreateVesselInspectionDto) {
    return this.ppKpv04BService.create(createPpKpv04BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppKpv04BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppKpv04BService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpKpv04BDto: UpdateVesselInspectionDto) {
    return this.ppKpv04BService.update(noTetapVesel, updatePpKpv04BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppKpv04BService.softDelete(noTetapVesel);
  }
  
}
