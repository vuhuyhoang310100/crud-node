import {Request, Response} from "express";
import { User } from "../entities/user";
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
