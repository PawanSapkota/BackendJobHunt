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
    Course:string

    @Column()
    status:string

    @Column()
    Stage:string

    @Column()
    Shift:string


    @Column({
        nullable:true
    })
    schoolName:string

    @Column({
        nullable:true
    })
    schoolCourseTaken:string

    @Column()
    Level_Of_Education:string

    @Column()
    refered_by:string

    @Column()
    referal_contact_no:string

    @Column()
    SourceOfInformation:string

    @Column()
    Category_name:string

    @Column()
    discount:string

    @Column()
    Gender:string

    @Column()
    image:string

    @Column({
        nullable:true
    })
    Date:string

    // @ManyToOne(()=>Category,(category)=>category.student_type,{
    //     eager:true,cascade:true
    // })
    // student_category:Category

    @CreateDateColumn()
    createdAt:Date
}