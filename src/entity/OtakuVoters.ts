import {Entity,Column,CreateDateColumn,PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { StudentInfo } from './Brand'

@Entity()
export class OtakuVoters{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    address:string

    @Column()
    contact:string

    // @OneToMany(()=>StudentInfo,(product)=>product.student_category,{
        
    // })
    // student_type:StudentInfo[]

    @CreateDateColumn()
    createdAt:Date


}