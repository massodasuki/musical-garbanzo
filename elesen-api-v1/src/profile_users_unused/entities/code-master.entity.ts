import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('code_masters')
export class CodeMaster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name_ms: string;
}
