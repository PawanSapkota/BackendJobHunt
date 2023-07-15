import "reflect-metadata";
import { DataSource } from "typeorm";
import { JobInfo } from "./entity/Brand";
import { Skills } from "./entity/Skills";
import { Category } from "./entity/Category";
import { JobType } from "./entity/JobType";
import { Technology } from "./entity/Technology";
import { Location } from "./entity/Location";
import { Benefit } from "./entity/Benefit";

// import {StudentInfo} from './entity/Brand'
// import {Category} from './entity/Category'
// import {OtakuVoters} from './entity/OtakuVoters'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "dpg-ciihst2ip7vpelre60qg-a.oregon-postgres.render.com",
  port: 5432,
  username: "jobhuntportal",
  password: "Ut8Fw4K2m6dvTm5HLmsnoPITQpiYk6ci",
  database: "jobhunt",
  synchronize: true,
  logging: false,
  ssl: true,
  entities: [
    // 'src/entity/**/*.ts','./entity/**/*.ts'
    JobInfo,
    Skills,
    Category,
    JobType,
    Technology,
    Location,
    Benefit,
  ],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscribe/**/*.ts"],
});
