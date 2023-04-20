import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import {pool} from "../config/mysql";


const insertUser = async (data:User) => {
    const responseInsert = await UserModel.create(data);
    return responseInsert;

}

const getUsers = async () => {
    const responseItem = await UserModel.find({});
    return responseItem;
}

const getUser = async (id:string) => {
    const responseItem = await UserModel.findOne({_id: id});
    return responseItem;
}

const updateUser = async (id:string,data:User) => {
    const responseItem = await UserModel.findOneAndUpdate({_id: id},data,{new:true});
    return responseItem;
}

const deleteUser = async (id:string) => {
    const responseItem = await UserModel.deleteOne({_id: id});
    return responseItem;
}







export {insertUser,getUser,getUsers,deleteUser,updateUser}