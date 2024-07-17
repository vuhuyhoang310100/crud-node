import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({nullable:false,default:'new user'})
    name!:string
    @Column({nullable:false})
    phone!:string
    @Column({nullable:true})
    email!:string
}