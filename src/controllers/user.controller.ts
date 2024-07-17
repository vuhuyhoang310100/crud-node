import {Request, Response} from "express";
import { s_create_user } from "../services/user.service";
import { validationResult } from "express-validator";
export const all_users = async (req:Request, res:Response)=>{
    res.send("Hellooooooo");
}

export const create_user = async(req:Request, res:Response)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.json({
            error:true,
            errors: errors.array(),
            message:"There are some validation errors"
        })
    }
    else{
        const result= await s_create_user(req,res)  
        res.json(result)
    }
 
}