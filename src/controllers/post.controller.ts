import {Request, Response} from "express";
import { s_listPost } from "../services/post.service";

export const listPost = async (req:Request, res:Response)=>{
    const result = await s_listPost(req, res);
    res.status(200).json(result);
}