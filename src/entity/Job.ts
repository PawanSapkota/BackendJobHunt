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
import { Category } from "./Category";
import { Skills } from "./Skills";
import { JobType } from "./JobType";

@Entity()
export class Job {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  job_name: string;

  @Column()
  job_phone: string;

  @Column()
  job_email: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @Column()
  date_posted: Date;

  @Column()
  company_name: string;

  @Column()
  salary_range: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  deadline_date: Date;

  @Column()
  experience: string;

  @ManyToMany(() => Location, (location) => location.jobs)
  locations: Location[];

  @ManyToMany(() => Skills, (skill) => skill.jobs)
  skills: Skills[];

  @ManyToMany(() => JobType, (jobtype) => jobtype.jobs)
  jobtypes: JobType[];

  @ManyToMany(() => Benefit, (benefit) => benefit.jobs)
  benefits: Benefit[];

  @ManyToMany(() => Technology, (technology) => technology.jobs)
  technologies: Technology[];

  @ManyToMany(() => Category, (category) => category.jobs)
  categories: Category;

  @ManyToOne(() => Company, (company) => company.jobs)
  companies: Company;
}
