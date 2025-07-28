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

@Injectable()
export class LpiFormService {
  constructor (
    @InjectRepository(LpiForm)
    private readonly lpiFormRepository: Repository<LpiForm>,

    @InjectRepository(VesselInspection)
    private vesselRepository: Repository<VesselInspection>,

    @InjectRepository(LpiFormImage)
    private readonly lpiFormImageRepo: Repository<LpiFormImage>,
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

  async submitForm (body: any, files: Express.Multer.File[]) {
    const newId = uuidv4()
    let form = this.lpiFormRepository.create({
      id: body.formId,
      user: body.user,
    })
    let lpiForm = await this.lpiFormRepository.save(form)
    await this.handleImageUploads(files, lpiForm)
    let noVessels = await this.fillForm(body)
    return this.getCombinedLpiData(body.formId, noVessels)
  }

  async fillForm (data: { payload: any }) {
    // Step 1: Parse the payload string into object
    let parsedPayload: any
    try {
      parsedPayload = JSON.parse(data.payload)
    } catch (err) {
      throw new BadRequestException('Invalid JSON in payload field')
    }

    // Step 2: Convert plain payload object into class instance
    const payloadInstance = plainToInstance(
      CreateLpiVesselInspectionDto,
      parsedPayload,
    )

    // Step 3: Validate the payload instance
    const validationErrors = await validate(payloadInstance)
    if (validationErrors.length > 0) {
      throw new BadRequestException(validationErrors)
    }

    // Step 4: Pass data to service
    const existing = await this.vesselRepository.findOne({
      where: { noVessels: payloadInstance.noVessels },
    })

    if (existing) {
      throw new ConflictException('noVessels already exists')
    }

    const newVesselInspection = this.vesselRepository.create({
      ...payloadInstance,
    })
    let vesselsInspection = await this.vesselRepository.save(
      newVesselInspection,
    )
    return vesselsInspection.noVessels
  }

  async getCombinedLpiData (
    formId: string,
    noVessels: string,
  ): Promise<CombinedLpiResponseDto> {
    // Find the LpiForm
    const lpiForm = await this.lpiFormRepository.findOne({
      where: { id: formId },
      relations: ['images'],
    })

    if (!lpiForm) throw new NotFoundException('LPI Form not found')

    const vesselInspection = await this.vesselRepository.findOne({
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
    })

    if (!vesselInspection) {
      throw new NotFoundException('Vessel inspection not found')
    }

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
    }
  }

  async handleImageUploads (files: Express.Multer.File[], lpiForm: any) {
    const results: any = []

    for (const file of files) {
      if (file.fieldname.startsWith('img_')) {
        const uploaded = await this.handleImageUpload(file, lpiForm)
        results.push(uploaded)
      }
    }

    await this.lpiFormImageRepo.save(results)
    return results
  }

  async handleImageUpload (file: Express.Multer.File, lpiForm: any) {
    const newId = uuidv4()

    if (!file) throw new BadRequestException('No file uploaded')

    const folderPath = './uploads/' + lpiForm.formId + '/'
    mkdirSync(folderPath, { recursive: true })

    const filename = this.generateFileName(file.fieldname, file.originalname)
    const fullPath = join(folderPath, filename)

    writeFileSync(fullPath, file.buffer)
    return {
      id: newId,
      filename: filename,
      // path: relative(process.cwd(), fullPath),
      path: `/uploads/${filename}`,
      lpiForm: lpiForm,
    }
  }

  private generateFileName (imgType: string, originalName: string): string {
    const timestamp = Date.now()
    const ext = extname(originalName)
    return `${imgType}-${timestamp}${ext}`
  }
}
