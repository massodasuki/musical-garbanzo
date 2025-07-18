import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vessels } from './entities/vessel.entity';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
@Injectable()
export class VesselsService {
  constructor(
    @InjectRepository(Vessels)
    private readonly vesselRepository: Repository<Vessels>,
  ) {}

  create(dto: CreateVesselDto) {
    const vessel = this.vesselRepository.create(dto);
    return this.vesselRepository.save(vessel);
  }

  // findAll() {
  //   return this.vesselRepository.find();
  // }

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
