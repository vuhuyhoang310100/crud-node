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

export const s_search_user = async (req:Request,res:Response)=>{
    const{name} = req.body;
    if(name){
        const users = await user.find({where:{
            name:Like(`%${name}%`)
        }
           
        })
        return users;
    }
    else{
        return null;
    }
}
export const s_delete_user = async (req:Request,res:Response)=>{
    const id:any = req.params.id;
    if(id){
        const users = await user.findOne({where:{
            id:id
        }
           
        });
        if(users){
            await user.remove(users);
            return true;
        }else{
            return "user not found";
        }
    }
}
export const s_update_user = async (req:Request,res:Response)=>{
    const uid:any = req.params.id;
    const {name,phone,email}=req.body;
    if(!uid||!name||!phone||!email){
        return "data missing"

    }
    else{
       const x =  await user.update(
            {id:uid},{name:name,phone:phone,email:email}
        );
        return x;
    }

}