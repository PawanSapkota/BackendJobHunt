import {Entity,Column,CreateDateColumn,PrimaryGeneratedColumn, OneToMany} from 'typeorm'
// import { JobInfo } from './Brand'

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

    @Column({
        nullable:true
    })
    Cosplayer:string
    @Column({
        type:'jsonb',
        array:false,
        default:() => "'[]'",
        nullable:true,
    })
    VoteTo:Array<{name:string,infoId:string}>
    // @OneToMany(()=>StudentInfo,(product)=>product.student_category,{
        
    // })
    // student_type:StudentInfo[]

    @CreateDateColumn()
    createdAt:Date


}