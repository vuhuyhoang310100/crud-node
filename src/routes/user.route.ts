import express from "express";
import { all_users, create_user, get_user, search_user } from "../controllers/user.controller";
import { create_user_validation } from "../validations/user/create_user.validation";
import { s_get_user } from "../services/user.service";
export const user_route = express.Router();

user_route.get("/alluser",all_users);

user_route.post("/create",create_user_validation(),create_user)

user_route.get("/get_user/:id",get_user)

user_route.get("/search", search_user)