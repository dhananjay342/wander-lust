
import { generateaccessToken } from "../config/jwt.js";
import { create } from "./user";
import User from "../models/user";
import { compare } from "bcrypt";
import { UnauthorizedError } from "../errors/unauthorized";

export const register = async (data) => {
    const user = await create(data);
    const token = generateaccessToken({ userId: user._id , name: user.name});
    return token;
};

export const login = async (data) => {
    const user = await User.findOne({ email: data.email });
    if (!user || !(await compare(data.password, user.password))) {
        throw new UnauthorizedError();
    }
    const token = generateaccessToken({ userId: user._id , name: user.name});
    return token;
};