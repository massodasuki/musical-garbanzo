import { Injectable, NotFoundException, ConflictException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';
import { CreateVesselInspectionDto } from '../../shared/dto/create-vessel-inspection.dto';
import { UpdateVesselInspectionDto } from '../../shared/dto/update-vessel-inspection.dto';
import { PaginationQueryDto } from '../../shared/dto/pagination-query.dto';



@Injectable()
export class PpPm02Service {
constructor(
      @InjectRepository(VesselInspection)
      private vesselRepository: Repository<VesselInspection>,
    ) {}

    async create(createVesselInspectionDto: CreateVesselInspectionDto): Promise<VesselInspection> {
      const existing = await this.vesselRepository.findOne({
        where: { noVessels: createVesselInspectionDto.noVessels },
      });

      if (existing) {
        throw new ConflictException('noVessels already exists');
      }
      const newVesselInspection = this.vesselRepository.create({
        ...createVesselInspectionDto,
        jenisBorang : 'pp-pm-02'});
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
