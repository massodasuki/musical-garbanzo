import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFiles,
  Body,
  Req,
  Param,
} from '@nestjs/common';
import { AnyFilesInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CreateLpiFormDto } from './dto/create-lpi-form.dto';
import { LpiFormService } from './lpi-form.service';
import multer, { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('api/v1/applications/lpi-form')
export class LpiFormController {
  constructor(private readonly lpiFormService: LpiFormService) {}

  @Post()
  @UseInterceptors(
    AnyFilesInterceptor(),
  )
  async create(
    @Body() body: any,
    @Req() req,
  ) {

    const uploaded = (req.files || []).filter((f) =>
      f.fieldname.startsWith('img_'),
    );
    console.log('Received Images:', uploaded);

    let img =  {
      message: 'Dynamic image fields uploaded',
      files: uploaded.map((f) => ({
        field: f.fieldname,
        filename: f.filename,
        originalname: f.originalname,
      })),
    };

    return this.lpiFormService.submitForm(body, uploaded);
  }

  // @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findOne (@Param('id') noVessels: string) {
      return this.lpiFormService.findOne(noVessels)
    }
}
