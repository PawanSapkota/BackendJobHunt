import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Location } from "./Location";
import { Benefit } from "./Benefit";

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
}
