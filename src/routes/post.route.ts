import express from "express";
import { create_post, delete_post, edit_post, get_post, listPost } from "../controllers/post.controller";
import { s_update_post } from "../services/post.service";
export const post_route = express.Router();


post_route.get("/list",listPost)
post_route.get("/post/:id",get_post)
post_route.post("/create",create_post)
post_route.delete("/delete/:id",delete_post)
post_route.post("/update/:id",edit_post)