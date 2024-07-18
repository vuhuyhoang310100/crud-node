import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post";

@Entity("user")
export class User{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({nullable:false,default:'new user'})
    name!:string
    @Column({nullable:false})
    phone!:string
    @Column({nullable:true})
    email!:string
    @Column({nullable:false,default:'123456'})
    password!:string
    @OneToMany(()=>Post,(post)=>post.user)
    posts!:Post[]
}