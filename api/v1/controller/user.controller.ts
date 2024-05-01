import { Request, Response } from "express";
import md5 from "md5";
import User from "../models/user.model";
import * as generate from "../../../helpers/generate";

export const register = async (req: Request, res: Response) => {
    const existEmail = await User.findOne({
        email: req.body.email,
        deleted: false
    });

    if(existEmail) {
        res.json({
            code: 400,
            message: "Email đã tồn tại!"
        });
        return
    }

    const infoUser = {
        fullName: req.body.fullName,
        email: req.body.email,
        password: md5(req.body.password),
        token: generate.generateRadomString(30)
    }

    const user = new User(infoUser);
    await user.save();
    
    const token = user.token;

    res.json({
        code: 200,
        message: "Tạo tài khoản thành công!",
        token: token
    });
};