import "reflect-metadata"
import { DataSource } from "typeorm"
import {StudentInfo} from './entity/Brand'
import {Category} from './entity/Category'
import {OtakuVoters} from './entity/OtakuVoters'


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-chqrrnm4dad3eom0rbh0-a.oregon-postgres.render.com",
    port: 5432,
    username: "hubit_data_user",
    password: "A5aDlEyvsr1UAEw7S16IVRXwpFRTRfVg",
    database: "hubit_data",
    synchronize: true,
    logging: false,
    ssl:true,
    entities: [
        'src/entity/**/*.ts','./entity/**/*.ts',OtakuVoters,StudentInfo,Category
    ], 
    migrations: [
        'src/migration/**/*.ts'
    ],
    subscribers: [
        'src/subscribe/**/*.ts'
    ],
})
