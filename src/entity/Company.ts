import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { Category } from "./Category";
import { Location } from "./Location";
import { Technology } from "./Technology";
import { JobType } from "./JobType";
import { Benefit } from "./Benefit";
import { Job } from "./Job";
@Entity()
export class Company {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  company_name: string;

  @Column()
  ceo_name: string;

  @Column({ default: "not-available" })
  company_code: string;

  @Column()
  agent_name: string;

  @Column()
  company_phone: string;

  @Column()
  company_email: string;

  @Column({ nullable: true })
  total_employee: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  establish_data: Date;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @ManyToMany(() => Category, (category) => category.companies)
  categories: Category[];

  @ManyToMany(() => Location, (location) => location.companies)
  locations: Location[];

  @ManyToMany(() => Technology, (technology) => technology.companies, {
    nullable: true,
  })
  technologies: Technology[];

  @ManyToMany(() => JobType, (jobtype) => jobtype.companies, { nullable: true })
  jobtypes: JobType[];

  @ManyToMany(() => Benefit, (benefit) => benefit.companies)
  benefits: Benefit[];

  @OneToMany(() => Job, (job) => job.companies)
  jobs: Job[];
}
