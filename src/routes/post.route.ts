import express from "express";
import { listPost } from "../controllers/post.controller";
export const post_route = express.Router();


post_route.get("/list",listPost)