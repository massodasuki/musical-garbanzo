import { Injectable, BadRequestException, ConflictException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { VesselInspection } from "src/shared/entities/vessel-inspection.entity";
import { Repository } from "typeorm";
import { CreateLpiVesselInspectionDto } from "./dto/create-lpi-vessel-inspection.dto";
import { LpiForm } from './entities/lpi-form.entity';

@Injectable()
export class VesselInspectionService {
  constructor(
    @InjectRepository(VesselInspection)
    private readonly vesselRepo: Repository<VesselInspection>,
  ) {}

  async fillForm(data: { payload: any, formId:string }, lpiForm : LpiForm) {
    let parsedPayload: any;
    try {
      parsedPayload = JSON.parse(data.payload);
    } catch {
      throw new BadRequestException('Invalid JSON in payload field');
    }
    // console.log(parsedPayload.formId = );

    const dtoInstance = plainToInstance(CreateLpiVesselInspectionDto, parsedPayload);
    const errors = await validate(dtoInstance);
    if (errors.length > 0) throw new BadRequestException(errors);

    const existing = await this.vesselRepo.findOne({
      where: { vesselNo: dtoInstance.vesselNo },
    });
    if (existing) throw new ConflictException('vesselNo already exists');

    dtoInstance
    const newRecord = this.vesselRepo.create({...dtoInstance, lpiForm: lpiForm});
    const saved = await this.vesselRepo.save(newRecord);
    return saved.vesselNo;
  }

  

  async getVesselInspection(noVessels: string) {
    const inspection = await this.vesselRepo.findOne({
      where: { vesselNo: noVessels },
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
    if (!inspection) throw new NotFoundException('Vessel inspection not found');
    return inspection;
  }
}
