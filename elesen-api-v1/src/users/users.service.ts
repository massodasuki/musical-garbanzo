// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { UpdateUserDto } from './dto/update-user.dto'
import * as bcrypt from 'bcryptjs'
import { UUID } from 'crypto'
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto'

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async findByUsername (username: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { username } })
  }

  async findById (id: UUID): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id } })
    if (!user) throw new NotFoundException('User not found')
    return user
  }

  async getUserWithProfile (id: UUID) {
    return this.userRepo.findOne({
      where: { id },
      relations: [
        'profile',
        'profile.gender',
        'profile.race',
        'profile.religion',
        'profile.maritalStatus',
        'roles',
      ],
    })
  }

  async createUser (username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = this.userRepo.create({ username, password: hashedPassword })
    return this.userRepo.save(user)
  }

  // async getAllUsers(): Promise<User[]> {
  //   return this.userRepo.find();
  // }

  async findAll (paginationQuery: PaginationQueryDto) {
    const { limit = 10, page = 1 } = paginationQuery

    const [data, total] = await this.userRepo.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    })

    return {
      data,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    }
  }

  async update (username: string, dto: UpdateUserDto): Promise<User> {
    const existing = await this.userRepo.findOne({ where: { username } })

    if (!existing) {
      throw new NotFoundException(`Vessel with id ${username} not found`)
    }

    // Shallow merge or customize deeply as needed
    const updated = this.userRepo.merge(existing, dto)
    return this.userRepo.save(updated)
  }

  async softDelete (username: string): Promise<void> {
    const user = await this.userRepo.findOneBy({ username })
    if (user) {
      await this.userRepo.softRemove(user)
    }
  }

  // async getUsersByRoleLevel (level: number): Promise<User[]> {
  //   return this.userRepo
  //     .createQueryBuilder('user')
  //     .leftJoinAndSelect('user.roles', 'role')
  //     .where('role.level = :level', { level })
  //     .getMany()
  // }

  async getUsersByRoleLevel (
    level: number,
    page = 1,
    pageSize = 10,
  ): Promise<{
    data: User[]
    total: number
    page: number
    pageSize: number
    totalPages: number
  }> {
    const skip = (page - 1) * pageSize

    const [data, total] = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'role')
      .where('role.level = :level', { level })
      .skip(skip)
      .take(pageSize)
      .getManyAndCount()

    const totalPages = Math.ceil(total / pageSize)

    return {
      data,
      total,
      page,
      pageSize,
      totalPages,
    }
  }

  async getUsersByRoleLevelAndUsername (
    level: number,
    username: string,
    page = 1,
    pageSize = 10,
  ): Promise<{
    data: User[]
    total: number
    page: number
    pageSize: number
    totalPages: number
  }> {
    const skip = (page - 1) * pageSize

    const [data, total] = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'role')
      .where('role.level = :level', { level })
      .andWhere('user.username = :username', { username })
      .skip(skip)
      .take(pageSize)
      .getManyAndCount()

    const totalPages = Math.ceil(total / pageSize)

    return {
      data,
      total,
      page,
      pageSize,
      totalPages,
    }
  }

  // Get user detail by vessels

  async getUsersByVessel (vesselNo: string): Promise<User[]> {
    return this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.entity', 'entity') // ✅ use 'entity' (singular)
      .leftJoin('entity.vessels', 'vessel')
      .where('vessel.vessel_no = :vesselNo', { vesselNo })
      .getMany() // ✅ fetch the result
  }
}
