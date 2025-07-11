import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselInspection } from '../shared/entitites/vessel-inspection.entity';
import { CreateVesselInspectionDto } from '../shared/dto/create-vessel-inspection.dto';
import { UpdateVesselInspectionDto } from '../shared/dto/update-vessel-inspection.dto';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';



@Injectable()
export class PpKpv04BService {
constructor(
      @InjectRepository(VesselInspection)
      private vesselRepository: Repository<VesselInspection>,
    ) {}

    async create(createVesselInspectionDto: CreateVesselInspectionDto): Promise<VesselInspection> {
      createVesselInspectionDto
      const newVesselInspection = this.vesselRepository.create({
        ...createVesselInspectionDto,
        jenisBorang : 'pp-kpv-04-b'});
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

  findOne(noTetapVesel: string) {
    return this.vesselRepository.findOne({
      where: { noTetapVesel },
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



    async update(noTetapVesel: string, dto: UpdateVesselInspectionDto): Promise<VesselInspection> {
      const existing = await this.vesselRepository.findOne({ where: { noTetapVesel } });
      
      if (!existing) {
        throw new NotFoundException(`Vessel with id ${noTetapVesel} not found`);
      }

      // Shallow merge or customize deeply as needed
      const updated = this.vesselRepository.merge(existing, dto);
      return this.vesselRepository.save(updated);
    }

    async softDelete(noTetapVesel: string): Promise<void> {
    const vessel = await this.vesselRepository.findOneBy({ noTetapVesel });
    if (vessel) {
      await this.vesselRepository.softRemove(vessel);
    }
  }

}
