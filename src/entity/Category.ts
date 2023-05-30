import {Entity,Column,CreateDateColumn,PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { StudentInfo } from './Brand'

@Entity()
export class Category{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    Category_name:string

    @OneToMany(()=>StudentInfo,(product)=>product.student_category,{
        
    })
    student_type:StudentInfo[]

    @CreateDateColumn()
    createdAt:Date


}