import { check } from "express-validator";

export const create_user_validation =()=>{
    return [    check("name").exists().withMessage("name is required").isLength({min:5, max:40}).withMessage("Tên phải lớn hơn 5 và nhỏ hơn 40 ký tự"),
        check("email").isEmail().withMessage("input not email")]

}