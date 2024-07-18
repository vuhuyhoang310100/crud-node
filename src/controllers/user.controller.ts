import {Request, Response} from "express";
import { s_create_user, s_all_user, s_get_user, s_search_user, s_delete_user, s_update_user } from "../services/user.service";
import { validationResult } from "express-validator";


export const all_users = async (req:Request, res:Response)=>{
    const result = await s_all_user(req,res);
    res.json(result);
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

export const get_user = async(req:Request, res:Response)=>{
    const user = await s_get_user(req,res);
    res.json(user); 
}

export const search_user = async(req:Request, res:Response)=>{
    const user = await s_search_user(req,res);
    res.json(user); 
}
export const delete_user = async(req:Request, res:Response)=>{
    const user = await s_delete_user(req,res);
    res.json(user); 
}

export const update_user = async(req:Request, res:Response)=>{
    const user = await s_update_user(req,res);
    res.json(user); 
}

