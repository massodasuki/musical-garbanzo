import { Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  UseGuards, 
  Query, UploadedFiles, UseInterceptors} from '@nestjs/common';
import { LpiFormService } from './lpi-form.service';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { CreateLpiVesselInspectionDto } from './dto/create-lpi-vessel-inspection.dto';
import { AuthGuard } from '@nestjs/passport';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreateLpiFormDto } from './dto/create-lpi-form.dto';

@ApiTags('LPI FORM')
@Controller('/api/v1/applications/lpi-form')
export class LpiFormController {
  constructor(private readonly lpiFormService: LpiFormService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'imgA', maxCount: 1 },
      { name: 'imgB', maxCount: 1 },
      { name: 'imgC', maxCount: 1 },
    ]),
  )
  async create(
    @Body() body: any,
    @UploadedFiles()
    files: {
      imgA?: Express.Multer.File[];
      imgB?: Express.Multer.File[];
      imgC?: Express.Multer.File[];
    },
  ) {
    return this.lpiFormService.handleFormSubmission(body, files);
  }

  // @Post()
  // create(@Body() createLpiFormDto: CreateLpiVesselInspectionDto) {
  //   return this.lpiFormService.create(createLpiFormDto);
  // }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.lpiFormService.findAll(paginationQuery);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':noVessels')
  findOne(@Param('noVessels') noVessels: string) {
    return this.lpiFormService.findOne(noVessels);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':noVessels')
  update(@Param('noVessels') noVessels: string, @Body() updateLpiFormDto: UpdateVesselInspectionDto) {
    return this.lpiFormService.update(noVessels, updateLpiFormDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noVessels')
  remove(@Param('noVessels') noVessels: string) {
    return this.lpiFormService.softDelete(noVessels);
  }
  
}
