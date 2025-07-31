import { Injectable, BadRequestException, ConflictException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { VesselInspection } from "src/shared/entities/vessel-inspection.entity";
import { Repository } from "typeorm";
import { CreateLpiVesselInspectionDto } from "./dto/create-lpi-vessel-inspection.dto";

@Injectable()
export class VesselInspectionService {
  constructor(
    @InjectRepository(VesselInspection)
    private readonly vesselRepo: Repository<VesselInspection>,
  ) {}

  async fillForm(data: { payload: any }) {
    let parsedPayload: any;
    try {
      parsedPayload = JSON.parse(data.payload);
    } catch {
      throw new BadRequestException('Invalid JSON in payload field');
    }

    const dtoInstance = plainToInstance(CreateLpiVesselInspectionDto, parsedPayload);
    const errors = await validate(dtoInstance);
    if (errors.length > 0) throw new BadRequestException(errors);

    const existing = await this.vesselRepo.findOne({
      where: { noVessels: dtoInstance.noVessels },
    });
    if (existing) throw new ConflictException('noVessels already exists');

    const newRecord = this.vesselRepo.create(dtoInstance);
    const saved = await this.vesselRepo.save(newRecord);
    return saved.noVessels;
  }

  async getVesselInspection(noVessels: string) {
    const inspection = await this.vesselRepo.findOne({
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
    if (!inspection) throw new NotFoundException('Vessel inspection not found');
    return inspection;
  }
}
