import { Module } from '@nestjs/common';
import { ProfileUsersService } from './profile_users.service';
import { ProfileUsersController } from './profile_users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user-entity';
import { ProfileUser } from './entities/profile_user.entity';
import { CodeMaster } from './entities/code-master.entity';




@Module({
  
  imports: [TypeOrmModule.forFeature([User, ProfileUser, CodeMaster])],
  controllers: [ProfileUsersController],
  providers: [ProfileUsersService],
})
export class ProfileUsersModule {}
