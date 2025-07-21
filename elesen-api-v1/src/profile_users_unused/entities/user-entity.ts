import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { ProfileUser } from "./profile_user.entity";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ name: 'profile_picture' })
  profilePicture: string;

  // ... other fields

  @OneToOne(() => ProfileUser, (profile) => profile.user)
  profile: ProfileUser;
}
