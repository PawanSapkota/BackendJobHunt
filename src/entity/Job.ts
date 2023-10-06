import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Location } from "./Location";
import { Benefit } from "./Benefit";
import { Company } from "./Company";
import { Technology } from "./Technology";

@Entity()
export class Job {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  job_name: string;

  @Column()
  job_code: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @Column()
  date_posted: Date;

  @Column()
  company_name: string;

  @Column()
  salary_range: number;

  @Column({ nullable: true })
  description: string;

  @Column()
  deadline_date: Date;

  @ManyToMany(() => Location, (location) => location.jobs)
  locations: Location[];

  @ManyToMany(() => Benefit, (benefit) => benefit.jobs)
  benefits: Benefit[];

  @ManyToMany(() => Technology, (technology) => technology.jobs)
  technologies: Technology[];

  @ManyToOne(() => Company, (company) => company.jobs)
  companies: Company;
}
