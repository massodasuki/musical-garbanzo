import { Injectable } from '@nestjs/common';
import { CreateProfileUserDto } from './dto/create-profile_user.dto';
import { UpdateProfileUserDto } from './dto/update-profile_user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { UUID } from 'crypto';
@Injectable()
export class ProfileUsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async getUserWithProfile(id: UUID) {
    return this.userRepo.findOne({
      where: { id },
      relations: [
        'profile',
        'profile.gender',
        'profile.race',
        'profile.religion',
        'profile.maritalStatus',
      ],
    });
  }
}
