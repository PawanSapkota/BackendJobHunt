import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Company } from "./Company";
import { Job } from "./Job";
@Entity()
export class JobType {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @ManyToMany(() => Company, (company) => company.jobtypes)
  // @JoinTable()
  // companies: Company[];

  @ManyToMany(() => Job, (job) => job.jobtypes)
  @JoinTable()
  jobs: Job[];
}

