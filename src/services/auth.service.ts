import { Request, Response } from "express";
import db from "../database/db";
import { User } from "../entities/user";
import jwt from "jsonwebtoken"

const user = db.getRepository(User);
export const s_login = async (req:Request, res:Response)=>{
    const {email, password} = req.body;
    const check_user = await user.findOne({where:{email,password:password}})
    if(check_user){
        const token =jwt.sign({
            userId:check_user.id
        },'nodejs-typeorm',{expiresIn:'10s'});
        let obj = {
            user:check_user,
            token:token,
            message:'Successfully'
        }
        return obj;
    }
    else{
        let obj = {
            user:null,
            token:null,
            message:'Faild'

        }
        return obj;

    }

}
export const s_signup = async (req:Request, res:Response)=>{
    const {email, password, name,phone} = req.body;
    const check_user = await user.findOne({where:{email,password:password}})
    if(check_user){
      let q = {
        message:"user đã tồn tại",
        state:false
      }
      return q;
    }
    else{
       const users =await user.save({name:name,phone:phone,email:email,password:password})
        const token = jwt.sign({userId:users.id},'nodejs-typeorm',{expiresIn:'10m'})   
        let obj = {
            user:users,
            token:token,
            message:'successfully'

        }
        return obj;

    }

}