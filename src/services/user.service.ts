import {Request, Response} from "express";
import { User } from "../entities/user";
import { Like } from "typeorm";
import db from "../database/db";

const user = db.getRepository(User)
export const s_create_user = async (req:Request, res:Response) =>{
    const{name,phone,email} = req.body;
 await user.save({
            name: name,
            phone:phone,
            email:email
        });
        // return newuser
}

export const s_all_user =async(req:Request,res:Response)=>{
    return await  user.find();
   
}
export const s_get_user =async(req:Request,res:Response)=>{
    const user_id:any=req.params.id;

    const getUser = await user.findOne({where:{id:user_id}});
    if(getUser?.id){
        return getUser;

    }
    else{
        return null; 
    }
   
}

export const search_user =async(req:Request,res:Response)=>{
const {name} = req.body;
if(name){
const users = await user.find({where:{
    name:Like(`%$(name)%`),
}})
return users;
}
else{
    return "Chưa có dữ liệu"
}
   
}