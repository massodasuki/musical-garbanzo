import { User } from "src/users/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { CodeMaster } from "./code-master.entity";

@Entity('profile_users')
export class ProfileUser {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.username)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'gender_id' })
  gender: CodeMaster;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'race_id' })
  race: CodeMaster;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'religion_id' })
  religion: CodeMaster;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'marital_status_id' })
  maritalStatus: CodeMaster;

  // ... other fields
}
