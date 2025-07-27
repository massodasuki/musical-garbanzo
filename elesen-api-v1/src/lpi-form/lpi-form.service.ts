import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LpiForm } from './entities/lpi-form.entity';
import { Repository } from 'typeorm';
import { LpiFormImage } from './entities/lpi-form-image.entity';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateLpiVesselInspectionDto } from './dto/create-lpi-vessel-inspection.dto';
import { VesselInspection } from 'src/shared/entities/vessel-inspection.entity';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';
import { UpdateVesselInspectionDto } from 'src/shared/dto/update-vessel-inspection.dto';
import { mkdirSync, writeFileSync } from 'fs';
import { extname, join, relative } from 'path';
import { CreateLpiFormDto } from './dto/create-lpi-form.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LpiFormService {
  constructor(
    @InjectRepository(LpiForm)
    private readonly lpiFormRepository: Repository<LpiForm>,

    @InjectRepository(VesselInspection)
          private vesselRepository: Repository<VesselInspection>,

    @InjectRepository(LpiFormImage)
    private readonly lpiFormImageRepo: Repository<LpiFormImage>,
  ) {}


 

  // async createx(createLpiVesselInspectionDto: CreateLpiVesselInspectionDto): Promise<VesselInspection> {
        
  //       const existing = await this.vesselRepository.findOne({
  //         where: { noVessels: createLpiVesselInspectionDto.noVessels },
  //       });
  
  //       if (existing) {
  //         throw new ConflictException('noVessels already exists');
  //       }
  
  //       const newVesselInspection = this.vesselRepository.create({
  //         ...createLpiVesselInspectionDto});
  //       return this.vesselRepository.save(newVesselInspection);
  //     }  
  
  //   async findAll(paginationQuery: PaginationQueryDto) {
  //   const { limit = 10, page = 1 } = paginationQuery;
  
  //   const [data, total] = await this.vesselRepository.findAndCount({
  //     take: limit,
  //     skip: (page - 1) * limit,
  //     relations: {
  //       empunyaVesel: true,
  //       nakhoda: true,
  //       penandaanVesel: true,
  //       pukatTunda: true,
  //       butiranVesel: true,
  //       butiranEnjin: true,
  //       alatKeselamatan: true,
  //       peralatanMenangkap: true,
  //       peralatanTambahanUtama: true,
  //       peralatanTambahanTambahan: true,
  //       keadaanVesel: true,
  //     },
  //   });
  
  //   return {
  //     data,
  //     total,
  //     page,
  //     pageSize: limit,
  //     totalPages: Math.ceil(total / limit),
  //   };
  // }
  
  //   findOne(noVessels: string) {
  //     return this.vesselRepository.findOne({
  //       where: { noVessels },
  //       relations: {
  //         empunyaVesel: true,
  //         nakhoda: true,
  //         penandaanVesel: true,
  //         pukatTunda: true,
  //         butiranVesel: true,
  //         butiranEnjin: true,
  //         alatKeselamatan: true,
  //         peralatanMenangkap: true,
  //         peralatanTambahanUtama: true,
  //         peralatanTambahanTambahan: true,
  //         keadaanVesel: true,
  //       },
  //     });
  //   }
  
  
  
  //     async update(noVessels: string, dto: UpdateVesselInspectionDto): Promise<VesselInspection> {
  //       const existing = await this.vesselRepository.findOne({ where: { noVessels } });
        
  //       if (!existing) {
  //         throw new NotFoundException(`Vessel with id ${noVessels} not found`);
  //       }
  
  //       // Shallow merge or customize deeply as needed
  //       const updated = this.vesselRepository.merge(existing, dto);
  //       return this.vesselRepository.save(updated);
  //     }
  
  //     async softDelete(noVessels: string): Promise<void> {
  //     const vessel = await this.vesselRepository.findOneBy({ noVessels });
  //     if (vessel) {
  //       await this.vesselRepository.softRemove(vessel);
  //     }
  //   }


  
    async submitForm(body: any, files: Express.Multer.File[]) {


    const newId = uuidv4();
    let form =  this.lpiFormRepository.create({
        id : body.formId,
        user: body.user
      })
    let lpiForm = await this.lpiFormRepository.save(form);
    let images = await this.handleUploads(files, lpiForm);
    console.log(images);
    await this.lpiFormImageRepo.save(images);


      
      return this.create(body, images)
    }

     async create(data: {
      user: string;
      formId: string;
      vessels_id: string,
      payload: any;
      files: Express.Multer.File[];
    }, images : any) {
      // Step 1: Parse the payload string into object
      // let parsedPayload: any;
      // try {
      //   parsedPayload = JSON.parse(data.payload);
      // } catch (err) {
      //   throw new BadRequestException('Invalid JSON in payload field');
      // }

      // // Step 2: Convert plain payload object into class instance
      // const payloadInstance = plainToInstance(CreateLpiVesselInspectionDto, parsedPayload);

      // // Step 3: Validate the payload instance
      // const validationErrors = await validate(payloadInstance);
      // if (validationErrors.length > 0) {
      //   throw new BadRequestException(validationErrors);
      // }

      // // Optional: validate user/formId
      // if (!data.user || !data.formId) {
      //   throw new BadRequestException('Missing user or formId');
      // }
    const newId = uuidv4();
    let lpiForm =  this.lpiFormRepository.create({
        id : data.formId,
        user: data.user
      })
    let x = await this.lpiFormRepository.save(lpiForm);
    console.log(x)
    console.log(images);
    await this.lpiFormImageRepo.save(images);

      // Step 4: Pass data to service
      // return this.lpiFormRepository.create({
      //   user: data.user,
      //   formId: data.formId
      // });
    }

    async handleUploads(files: Express.Multer.File[], lpiForm : any) {
       const results : any = [];
       
        for (const file of files) {
        if (file.fieldname.startsWith('img_')) {
          // You can do more here, like moving/renaming or saving to DB
          const uploaded = await this.handleUpload(file, lpiForm);
          console.log(uploaded);
          results.push(uploaded);
          }
        }
        console.log(results);

        return results;
      }
    
      async handleUpload(file: Express.Multer.File, lpiForm : any) {
        const newId = uuidv4();

        if (!file) throw new BadRequestException('No file uploaded');
    
        const folderPath = './uploads/'+lpiForm.formId+'/';
        mkdirSync(folderPath, { recursive: true });
    
        const filename = this.generateFileName(file.fieldname, file.originalname);
        const fullPath = join(folderPath, filename);
    
        writeFileSync(fullPath, file.buffer);
        return {
          id: newId,
          filename : filename,
          // path: relative(process.cwd(), fullPath),
          path: `/uploads/${filename}`,
          lpiForm : lpiForm
        };
      }
    
      private generateFileName(imgType : string, originalName: string): string {
        const timestamp = Date.now();
        const ext = extname(originalName);
        return `${imgType}-${timestamp}${ext}`;
      }
    
}
