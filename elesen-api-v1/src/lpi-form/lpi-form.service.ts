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

@Injectable()
export class LpiFormService {
  constructor(
    @InjectRepository(LpiForm)
    private readonly lpiFormRepository: Repository<LpiForm>,

    @InjectRepository(VesselInspection)
          private vesselRepository: Repository<VesselInspection>,

    @InjectRepository(LpiFormImage)
    private readonly imageRepo: Repository<LpiFormImage>,
  ) {}


  // async create(data: {
  //   user: string;
  //   formId: string;
  //   payload: any;
  //   files: Express.Multer.File[];
  // }) {
  //   // Step 1: Parse the payload string into object
  //   let parsedPayload: any;
  //   try {
  //     parsedPayload = JSON.parse(data.payload);
  //   } catch (err) {
  //     throw new BadRequestException('Invalid JSON in payload field');
  //   }

  //   // Step 2: Convert plain payload object into class instance
  //   const payloadInstance = plainToInstance(CreateLpiVesselInspectionDto, parsedPayload);

  //   // Step 3: Validate the payload instance
  //   const validationErrors = await validate(payloadInstance);
  //   if (validationErrors.length > 0) {
  //     throw new BadRequestException(validationErrors);
  //   }

  //   // Optional: validate user/formId
  //   if (!data.user || !data.formId) {
  //     throw new BadRequestException('Missing user or formId');
  //   }

  //   // Step 4: Pass data to service

  //   this.lpiFormRepository.create({
  //     user: data.user,
  //     formId: data.formId
  //   });


  //   return this.lpiFormRepository.create({
  //     user: data.user,
  //     formId: data.formId
  //   });
  // }

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
  

    async handleUploads(files: Express.Multer.File[], formId : string) {
       const results : any = [];
       
        for (const file of files) {
        if (file.fieldname.startsWith('img_')) {
          // You can do more here, like moving/renaming or saving to DB
          const uploaded = await this.handleUpload(file, formId);
          console.log(uploaded);
          results.push(uploaded);
          }
        }
        console.log(results);

        return results;
      }
    
      async handleUpload(file: Express.Multer.File, formId : string) {

        if (!file) throw new BadRequestException('No file uploaded');
    
        const folderPath = './uploads/'+formId+'/';
        mkdirSync(folderPath, { recursive: true });
    
        const filename = this.generateFileName(file.fieldname, file.originalname);
        const fullPath = join(folderPath, filename);
    
        writeFileSync(fullPath, file.buffer);
    
        return {
          message: 'Upload successful',
          filename,
          relativePath: relative(process.cwd(), fullPath),
          publicUrl: `/uploads/${filename}`,
        };
      }
    
      private generateFileName(imgType : string, originalName: string): string {
        const timestamp = Date.now();
        const ext = extname(originalName);
        return `${imgType}-${timestamp}${ext}`;
      }
    
}
