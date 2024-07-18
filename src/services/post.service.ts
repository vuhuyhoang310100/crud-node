import {Request, Response} from "express";
import { Post } from "../entities/post";
import { Like } from "typeorm";
import db from "../database/db";

const post = db.getRepository(Post);
export const s_listPost = async (req:Request,res:Response)=>{
return await post.find({relations:['user']});
}