import {Request, Response} from "express";
import { Post } from "../entities/post";
import { Like } from "typeorm";
import db from "../database/db";
import { User } from "../entities/user";
const user = db.getRepository(User);
const post = db.getRepository(Post);
export const s_listPost = async (req:Request,res:Response)=>{
return await post.find({relations:['user']});
}

export const s_get_post = async (req:Request,res:Response)=>{
    const id:any = req.params.id;
return await post.findOne({where:{id:id},relations:['user']});
}

export const s_add_post = async (req:Request,res:Response)=>{
   const {title,content,user_id}=req.body;
   const users = await user.findOne({where:{id:user_id}});
   if(users){
    const posts = await post.create({
        title: title,
        content: content,
    });
   posts.user = users;
   const x = posts.save();
   return x;
   }
    }
    export const s_delete_post = async (req:Request,res:Response)=>{
        const id:any = req.params.id;
        const posts = await post.findOne({where:{id:id}});
        if(posts){
            await post.remove(posts);
            return true;

        }
        else{
            return false;
        }
        

        }
        export const s_update_post = async (req:Request,res:Response)=>{
            const uid:any = req.params.id;
            const {title,content}=req.body;
            const posts = await post.findOne({where:{id:uid}});
            if(posts){
                const x = await post.update(
                    { id: uid },
                    { title: title, content: content }
                );
                return x;
            }

            else{
               return "data missing";
            }
        }