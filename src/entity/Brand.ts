import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn, OneToMany, ManyToOne} from 'typeorm';
import { Category } from './Category';

@Entity()
export class StudentInfo{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column()
    contact_no:string

    @Column()
    address:string

    @Column()
    email:string

    @Column()
    gurdain_name:string

    @Column()
    gurdain_no:string

    @Column()
    course:string

    @Column()
    status:string

    @Column({
        nullable:true
    })
    schoolName:string

    @Column({
        nullable:true
    })
    schoolCourseTaken:string


    @Column()
    Stage:string

    @Column()
    Level:string

    @Column()
    Referred:string

    @Column()
    SourceOfInformation:string

    @ManyToOne(()=>Category,(category)=>category.student_type,{
        eager:true,cascade:true
    })
    student_category:Category

    @CreateDateColumn()
    createdAt:Date
}