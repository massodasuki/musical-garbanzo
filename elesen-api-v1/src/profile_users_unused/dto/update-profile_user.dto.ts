import { PartialType } from '@nestjs/swagger';
import { CreateProfileUserDto } from './create-profile_user.dto';

export class UpdateProfileUserDto extends PartialType(CreateProfileUserDto) {}
