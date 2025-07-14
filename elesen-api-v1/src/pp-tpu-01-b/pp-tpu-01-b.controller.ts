import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PpTpu01BService } from './pp-tpu-01-b.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PR-PG-01-C (Pendaftaran Pengurus Vesel)')
@Controller('/api/v1/applications/pp-tpu-01-b')
export class PpTpu01BController {
  constructor(private readonly ppTpu01BService: PpTpu01BService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPpTpu01BDto: CreateVesselInspectionDto) {
    return this.ppTpu01BService.create(createPpTpu01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ppTpu01BService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppTpu01BService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updatePpTpu01BDto: UpdateVesselInspectionDto) {
    return this.ppTpu01BService.update(noTetapVesel, updatePpTpu01BDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.ppTpu01BService.softDelete(noTetapVesel);
  }
  
}
