import {Request, Response} from "express";
import { s_add_post, s_delete_post, s_get_post, s_listPost, s_update_post } from "../services/post.service";

export const listPost = async (req:Request, res:Response)=>{
    const result = await s_listPost(req, res);
    res.status(200).json(result);
}
export const get_post = async (req:Request, res:Response)=>{
    const result = await s_get_post(req, res);
    res.status(200).json(result);
}
export const create_post = async (req:Request, res:Response)=>{
    const result = await s_add_post(req, res);
    res.status(200).json(result);
}
export const delete_post = async (req:Request, res:Response)=>{
    const result = await s_delete_post(req, res);
    res.status(200).json(result);
}

export const edit_post = async (req:Request, res:Response)=>{
    const result = await s_update_post(req, res);
    res.status(200).json(result);
}