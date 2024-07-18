import express from "express";
import {login, profile, signup} from "../controllers/auth.controller";

export const auth_route=express.Router();
auth_route.post("/login",login)
auth_route.post("/signup",signup)
auth_route.get("/profile",profile)