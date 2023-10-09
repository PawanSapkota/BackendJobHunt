import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Sales } from "./Sales";
import { Company } from "./Company";
import { Job } from "./Job";
@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Company, (company) => company.categories)
  @JoinTable()
  companies: Company[];

  @ManyToMany(() => Job, (job) => job.categories)
  @JoinTable()
  jobs: Job[];
}
