import { Request,Response } from "express"
import { insertUser,getUsers, getUser, updateUser, deleteUser} from "../services/usuarios";
import { handleHttp } from "../utils/error.handle";

const getItem = async ({params} : Request,res:Response) => {
    try {
        const {id} = params;
        const response = await getUser(id);
        const data = response ? response: "NOT_FOUND"
        res.json({
            result:true,
            data:data,
        });
    } catch (e) {
        res.json({
            result:false,
            data:e
        })
    }

}

const getItems = async (req:Request,res:Response) => {
    try {
        const response = await getUsers();
        res.json({
            result:true,
            data:response,
        });
    } catch (e) {
        res.json({
            result:false,
            data:e
        })
    }
}

const updateItem = async ( {params,body} :Request,res:Response) => {
    try {
        const {id} = params;
        const response = await updateUser(id,body);
        res.json({
            result:true,
            data:response
        })

    } catch (e) {
        res.json({
            result:false,
            data:e
        })
    }
}

const postItem = async ({body} : Request,res:Response) => {
    try {
        const responseItem = await insertUser(body);
        res.json({
            result:true,
            data:responseItem
        })

    } catch (e) {
        res.json({
            result:false,
            data:e
        })
    }
}

const deleteItem = async ({params} : Request,res:Response) => {
    try {
        const {id} = params;
        const responseItem = await deleteUser(id);
        res.json({
            result:true,
            data:responseItem
        })
    } catch (e) {
        res.json({
            result:false,
            data:e
        })
    }
}

const createUser = async(req:Request,res:Response) => {
    const {body} =req
     await insertUser(body)

    
}

export {getItem,getItems,deleteItem,updateItem,postItem,createUser}