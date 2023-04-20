import { hash } from "bcryptjs";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verfied } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email,password,name,rol}:User) => {
    const checkIs = await UserModel.findOne({email});
    if (checkIs) return "ALREADY_USER";
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({email,password:passHash,name,rol});

    return registerNewUser;
}

const loginUser = async ({email,password}:Auth) => {
    const checkIs = await UserModel.findOne({email});
    if (!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password; //Password encriptada desde BDD
    const isCorrect = await verfied(password,passwordHash);
    
    if(!isCorrect) return  "PASSWORD_INCORRECT";

    
    const token = generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs
    }
    return data;
}

export {registerNewUser,loginUser};