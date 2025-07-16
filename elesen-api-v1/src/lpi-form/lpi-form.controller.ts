import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { LpiFormService } from './lpi-form.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateLpiVesselInspectionDto } from './dto/create-lpi-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('LPI FORM')
@Controller('/api/v1/applications/lpi-form')
export class LpiFormController {
  constructor(private readonly lpiFormService: LpiFormService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createLpiFormDto: CreateLpiVesselInspectionDto) {
    return this.lpiFormService.create(createLpiFormDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.lpiFormService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noTetapVesel')
  findOne(@Param('noTetapVesel') noTetapVesel: string) {
    return this.lpiFormService.findOne(noTetapVesel);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noTetapVesel')
  update(@Param('noTetapVesel') noTetapVesel: string, @Body() updateLpiFormDto: UpdateVesselInspectionDto) {
    return this.lpiFormService.update(noTetapVesel, updateLpiFormDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noTetapVesel')
  remove(@Param('noTetapVesel') noTetapVesel: string) {
    return this.lpiFormService.softDelete(noTetapVesel);
  }
  
}
