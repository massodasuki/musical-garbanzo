import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { LpiForm } from './entities/lpi-form.entity'
import { Repository } from 'typeorm'
import { LpiFormImage } from './entities/lpi-form-image.entity'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { CreateLpiVesselInspectionDto } from './dto/create-lpi-vessel-inspection.dto'
import { VesselInspection } from 'src/shared/entities/vessel-inspection.entity'
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto'
import { UpdateVesselInspectionDto } from 'src/shared/dto/update-vessel-inspection.dto'
import { mkdirSync, writeFileSync } from 'fs'
import { extname, join, relative } from 'path'
import { CreateLpiFormDto } from './dto/create-lpi-form.dto'
import { v4 as uuidv4 } from 'uuid'
import { CombinedLpiResponseDto } from './dto/combined-lpi-response.dto'
import { LpiImageService } from './lpi-image.service'
import { VesselInspectionService } from './vessel-inspection.service'

@Injectable()
export class LpiFormService {
  [x: string]: any
  constructor (
    @InjectRepository(LpiForm)
    private readonly lpiFormRepository: Repository<LpiForm>,

    private readonly imageService: LpiImageService,
    private readonly vesselService: VesselInspectionService,

    // @InjectRepository(VesselInspection)
    // private vesselRepository: Repository<VesselInspection>,

    // @InjectRepository(LpiFormImage)
    // private readonly lpiFormImageRepo: Repository<LpiFormImage>,
  ) {}

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
    const form = this.lpiFormRepository.create({
      id: body.formId,
      user: body.user,
    });
    const lpiForm = await this.lpiFormRepository.save(form);
    await this.imageService.handleImageUploads(files, lpiForm);
    const noVessels = await this.vesselService.fillForm(body);
    return this.getCombinedLpiData(body.formId, noVessels);
  }

  async getCombinedLpiData(formId: string, noVessels: string) {
    const lpiForm = await this.lpiFormRepository.findOne({
      where: { id: formId },
      relations: ['images'],
    });
    if (!lpiForm) throw new NotFoundException('LPI Form not found');
    const vesselInspection = await this.vesselService.getVesselInspection(noVessels);
    return {
      id: lpiForm.id,
      user: lpiForm.user,
      createdAt: lpiForm.createdAt,
      images: lpiForm.images.map(img => ({
        id: img.id,
        filename: img.filename,
        path: img.path,
      })),
      vesselInspection,
    };
  }
}
