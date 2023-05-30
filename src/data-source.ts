import "reflect-metadata"
import { DataSource } from "typeorm"
import {StudentInfo} from './entity/Brand'
import {Category} from './entity/Category'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "26462264",
    database: "HubitStudentInfo",
    synchronize: true,
    logging: false,
    entities: [
        'src/entity/**/*.ts','./entity/**/*.ts',StudentInfo,Category
    ], 
    migrations: [
        'src/migration/**/*.ts'
    ],
    subscribers: [
        'src/subscrib/**/*.ts'
    ],
})
