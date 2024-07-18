
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { User } from "../entities/user";
import db from "../database/db";

const user = db.getRepository(User);

export const IsAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers["authorization"]) {
        return res.status(400).json({ success: false, massage: "Mã không hợp lệ" });
    }

    const header: any = req.headers["authorization"];
    const method: string = header?.split(" ")[0];
    const token: string = header?.split(" ")[1];

    if (!method || !token) {
        return res.status(400).json({ success: false, massage: "auth invalid" });
    } else if (method !== "Bearer") {
        return res.status(400).json({ success: false, massage: "method invalid" });
    }

    try {
        const tokenbody: any = jwt.verify(token, "057fba752db74df500c3a6b639c7c4ce7951a2cc4d9b972467f41dd39e7950b90ccb56a0a4a0da1a9a9d594a00447124ed12f3e714dad5afcc2230338b14d123"); 

        if (!tokenbody.userId) {
            return res.status(400).json({ success: false, message: "invalid token" });
        }

        const users = await user.findOne({ where: { id: tokenbody.userId } });
        if (!users) {
            return res.status(400).json({ success: false, massage: "Không tìm thấy user" });
        }

        req.user_data = users;
        next();
    } catch (err) {
        console.error("Error verifying token:", err);
        return res.status(400).json({ success: false, massage: "invalid token" });
    }
};