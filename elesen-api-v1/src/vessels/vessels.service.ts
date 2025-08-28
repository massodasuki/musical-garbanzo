import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vessels } from './entities/vessel.entity';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ProfilePentadbirHartas } from './entities/profile-pentadbir-hartas.entity';

@Injectable()
export class VesselsService {
  constructor(
    @InjectRepository(Vessels)
    private readonly vesselRepository: Repository<Vessels>,

    @InjectRepository(ProfilePentadbirHartas)
    private readonly pentadbirHartasRepository: Repository<ProfilePentadbirHartas>,
  ) {}

  create(dto: CreateVesselDto) {
    const vessel = this.vesselRepository.create(dto);
    return this.vesselRepository.save(vessel);
  }

   async findAll(paginationQuery: PaginationQueryDto) {
  const { limit = 10, page = 1 } = paginationQuery;

  const [data, total] = await this.vesselRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit
    });

    return {
      data,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  findOne(id: string) {
    return this.vesselRepository.findOneBy({ id });
  }

  async getVesselDetails(vesselNo: string) {
    // const data = await this.vesselRepository.findOne({
    //   where: { vessel_no: vesselNo },
    //   relations: [
    //     'user',
    //     'user.profilePentadbirHarta',
    //     'user.entity',
    //   ],
    // });

    const data = await this.vesselRepository.findOne({
      where: { id: vesselNo },
      relations: ['pentadbirHartas'],
    })

    let pentadbirId = data?.pentadbirHartas.id;
    const pentadbirHartas = await this.pentadbirHartasRepository.findOne({
      where: { id: pentadbirId },
      relations: ['user', 'vesselOwner'],
    })

    console.log(pentadbirHartas);
    if (!data) {
      throw new NotFoundException(`No data found for vessel_no ${vesselNo}`);
    }

    return data;
  }

  async update(id: string, dto: UpdateVesselDto) {
    await this.vesselRepository.update(id, {
      ...dto,
      updated_at: new Date(),
    });
    return this.vesselRepository.findOneBy({ id });
  }

  

  async remove(id: number, deletedBy: number) {
    await this.vesselRepository.update(id, {
      is_active: false,
      deleted_by: deletedBy,
      deleted_at: new Date(),
    });
    return { deleted: true };
  }
}
