import { Injectable, NotFoundException, ConflictException, BadRequestException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';
import { CreateLpiVesselInspectionDto } from './dto/create-lpi-vessel-inspection.dto';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { CreateLpiFormDto } from './dto/create-lpi-form.dto';
import { writeFileSync, mkdirSync } from 'fs';
import { join, relative, extname } from 'path';

@Injectable()
export class LpiFormService {
  constructor(
      @InjectRepository(VesselInspection)
      private vesselRepository: Repository<VesselInspection>,
    ) {}

  private readonly allowedTypes = ['pegawaiSignature', 'nelayanSignature', 'veselCondition'];

  //===================Handle Image =============================

  async handleFormSubmission(
    rawBody: any,
    files: {
      imgA?: Express.Multer.File[];
      imgB?: Express.Multer.File[];
      imgC?: Express.Multer.File[];
    },
  ) {
    const formDto: CreateLpiFormDto = {
      ...rawBody,
      part1: JSON.parse(rawBody.part1),
    };

    this.create(formDto.part1);

    const resultFiles = {};

    const imageInputs = [
      { file: files.imgA?.[0], type: rawBody.imgAType },
      { file: files.imgB?.[0], type: rawBody.imgBType },
      { file: files.imgC?.[0], type: rawBody.imgCType },
    ];

    for (const { file, type } of imageInputs) {
      if (file && type) {
        const uploaded = await this.handleUpload(file, type, rawBody);
        resultFiles[type] = uploaded;
      }
    }

    return {
      message: 'Form submitted successfully',
      form: formDto,
      uploadedFiles: resultFiles,
    };
  }

  async handleUpload(file: Express.Multer.File, imageType: string, rawBody : any) {
    if (!file) throw new BadRequestException('No file uploaded');

    if (!this.allowedTypes.includes(imageType)) {
      throw new BadRequestException(`Invalid image type: ${imageType}`);
    }

    const folderPath = this.getFolderPath(imageType, rawBody.formId);
    mkdirSync(folderPath, { recursive: true });

    const filename = this.generateFileName(file.originalname);
    const fullPath = join(folderPath, filename);

    writeFileSync(fullPath, file.buffer);

    return {
      message: 'Upload successful',
      imageType,
      filename,
      relativePath: relative(process.cwd(), fullPath),
      publicUrl: `/uploads/${this.getPublicUrlPath(imageType)}/${filename}`,
    };
  }

  private getFolderPath(imageType: string, formId: String): string {
    switch (imageType) {
      case 'pegawaiSignature':
        return './uploads/'+ formId +'/signatures/pegawai';
      case 'nelayanSignature':
        return './uploads/'+ formId +'/signatures/nelayan';
      case 'veselCondition':
        return './uploads/'+ formId +'/vessel-condition';
      default:
        return './uploads/'+ formId +'/others';
    }
  }

  private getPublicUrlPath(imageType: string): string {
    switch (imageType) {
      case 'pegawaiSignature':
        return 'signatures/pegawai';
      case 'nelayanSignature':
        return 'signatures/nelayan';
      case 'veselCondition':
        return 'vessel-condition';
      default:
        return 'others';
    }
  }

  private generateFileName(originalName: string): string {
    const timestamp = Date.now();
    const ext = extname(originalName);
    return `img-${timestamp}${ext}`;
  }

  //========================================================

  async create(createLpiVesselInspectionDto: CreateLpiVesselInspectionDto): Promise<VesselInspection> {
    
    const existing = await this.vesselRepository.findOne({
      where: { noVessels: createLpiVesselInspectionDto.noVessels },
    });

    if (existing) {
      throw new ConflictException('noVessels already exists');
    }

    const newVesselInspection = this.vesselRepository.create({
      ...createLpiVesselInspectionDto});
    return this.vesselRepository.save(newVesselInspection);
  }  

  async findAll(paginationQuery: PaginationQueryDto) {
  const { limit = 10, page = 1 } = paginationQuery;

  const [data, total] = await this.vesselRepository.findAndCount({
    take: limit,
    skip: (page - 1) * limit,
    relations: {
      empunyaVesel: true,
      nakhoda: true,
      penandaanVesel: true,
      pukatTunda: true,
      butiranVesel: true,
      butiranEnjin: true,
      alatKeselamatan: true,
      peralatanMenangkap: true,
      peralatanTambahanUtama: true,
      peralatanTambahanTambahan: true,
      keadaanVesel: true,
    },
  });

  return {
    data,
    total,
    page,
    pageSize: limit,
    totalPages: Math.ceil(total / limit),
  };
}

  findOne(noVessels: string) {
    return this.vesselRepository.findOne({
      where: { noVessels },
      relations: {
        empunyaVesel: true,
        nakhoda: true,
        penandaanVesel: true,
        pukatTunda: true,
        butiranVesel: true,
        butiranEnjin: true,
        alatKeselamatan: true,
        peralatanMenangkap: true,
        peralatanTambahanUtama: true,
        peralatanTambahanTambahan: true,
        keadaanVesel: true,
      },
    });
  }



    async update(noVessels: string, dto: UpdateVesselInspectionDto): Promise<VesselInspection> {
      const existing = await this.vesselRepository.findOne({ where: { noVessels } });
      
      if (!existing) {
        throw new NotFoundException(`Vessel with id ${noVessels} not found`);
      }

      // Shallow merge or customize deeply as needed
      const updated = this.vesselRepository.merge(existing, dto);
      return this.vesselRepository.save(updated);
    }

    async softDelete(noVessels: string): Promise<void> {
    const vessel = await this.vesselRepository.findOneBy({ noVessels });
    if (vessel) {
      await this.vesselRepository.softRemove(vessel);
    }
  }

}
