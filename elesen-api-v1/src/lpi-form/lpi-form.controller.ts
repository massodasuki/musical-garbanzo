import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  Body,
  Req,
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
    // let s =  this.lpiFormService.handleUploads(uploaded)



    const payload = body.payload;
    return this.lpiFormService.submitForm(body, uploaded);
    // return  this.lpiFormService.handleUploads(uploaded, body.formId);
  }

  
}
