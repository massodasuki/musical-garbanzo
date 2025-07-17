import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeviceRegistrationDto } from './dto/create-device-registration.dto';
import { UpdateDeviceRegistrationDto } from './dto/update-device-registration.dto';
import { DeviceRegistration } from './entities/device-registration.entity';

@Injectable()
export class DeviceRegistrationService {
  constructor(
    @InjectRepository(DeviceRegistration)
    private readonly deviceRepository : Repository<DeviceRegistration>
  ){}

  async create(dto : CreateDeviceRegistrationDto) : Promise<DeviceRegistration>{
    const registration = this.deviceRepository.create(dto);
    return this.deviceRepository.save(registration);
  }

  async findAll() : Promise<DeviceRegistration[]> {
    return this.deviceRepository.find();
  }

  async findOne(id: number): Promise<DeviceRegistration> {
    const token = await this.deviceRepository.findOne({ where: { id } });
    if (!token) {
      throw new NotFoundException(`DeviceToken with ID ${id} not found`);
    }
    return token;
  }

  async update(id: number, dto: UpdateDeviceRegistrationDto): Promise<DeviceRegistration> {
    const token = await this.findOne(id);
    const updated = this.deviceRepository.merge(token, dto);
    return this.deviceRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const result = await this.deviceRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`DeviceToken with ID ${id} not found`);
    }
  }
}
