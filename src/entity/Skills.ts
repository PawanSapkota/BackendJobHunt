import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Job } from "./Job";
// import { StudentInfo } from './Brand'

@Entity()
export class Skills {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  type: string;

  @ManyToMany(() => Job, (job) => job.skills)
  @JoinTable()
  jobs: Job[];

  // @OneToMany(()=>StudentInfo,(product)=>product.student_category,{

  // })
  // student_type:StudentInfo[]

  @CreateDateColumn()
  createdAt: Date;
}
