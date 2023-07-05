import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn, OneToMany, ManyToOne} from 'typeorm';
// import { Category } from './Category';

@Entity()
export class JobInfo{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    title:string

    @Column()
    subtitle:string

    @Column()
    company_name:string

    @Column()
    salaryRange:string

    @Column()
    description:string

    @Column()
    deadline:string

    @Column({
        type:'jsonb',
        array:false,
        default:() => "'[]'",
        nullable:true,
    })
    jobtype:Array<{title:string}>

    @Column({
        type:'jsonb',
        array:false,
        default:() => "'[]'",
        nullable:true,
    })
    category:Array<{title:string}>

    @Column({
        type:'jsonb',
        array:false,
        default:() => "'[]'",
        nullable:true,
    })
    skils:Array<{title:string}>

    @Column({
        type:'jsonb',
        array:false,
        default:() => "'[]'",
        nullable:true,
    })
    benefits:Array<{title:string}>

   @Column()
   location:string

    @Column()
    image:string
    // @ManyToOne(()=>Category,(category)=>category.student_type,{
    //     eager:true,cascade:true
    // })
    // student_category:Category

    @CreateDateColumn()
    createdAt:Date
}