import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinTable,
  ManyToMany
} from 'typeorm';
import { ProfileUser } from './profile-user.entity';
import { profile } from 'console';
import { Role } from './role.entity';
@Entity('users')
export class  User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 100, unique: true })
  username: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  email_verified_at: Date;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 100, nullable: true })
  remember_token: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: false })
  is_admin: boolean;

  @Column({ length: 50 })
  user_type: string;

  @Column({ length: 255, nullable: true })
  profile_picture: string;

  @Column({ type: 'timestamp', nullable: true })
  last_online_at: Date;

  @Column({ length: 100, nullable: true })
  bumiputera_type: string;

  @Column({ length: 255, nullable: true })
  address1: string;

  @Column({ length: 255, nullable: true })
  address2: string;

  @Column({ length: 255, nullable: true })
  address3: string;

  @Column({ length: 10, nullable: true })
  postcode: string;

  @Column({ length: 100, nullable: true })
  district: string;

  @Column({ nullable: true })
  state_id: string;

  @Column({ length: 20, nullable: true })
  contact_number: string;

  @Column({ length: 20, nullable: true })
  mobile_contact_number: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ nullable: true })
  entity_id: string;

  @Column({ nullable: true })
  position_id: string;

  @Column({ type: 'date', nullable: true })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Column({ length: 50, nullable: true })
  watikah_status: string;

  @OneToOne(() => ProfileUser, profile => profile.user)
  profile: ProfileUser;

  @ManyToMany(() => Role, role => role.users)
  @JoinTable({
    name: 'user_role',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: Role[];
}
