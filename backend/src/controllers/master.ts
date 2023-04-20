import { Request,response,Response } from "express"
import { insertMaster,getMasters, getMaster, updateMaster, deleteMaster, create} from "../services/masters";
import { handleHttp } from "../utils/error.handle";

const getItem = async ({params} : Request,res:Response) => {
    try {
        const {id} = params;
        const response = await getMaster(id);
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
        const response = await getMasters();
        res.send({
            result:true,
            data:response,
        });
    } catch (e) {
        res.send({
            result:false,
            data:e
        })
    }
}

const updateItem = async ( {params,body} :Request,res:Response) => {
    try {
        const {id} = params;
        const response = await updateMaster(id,body);
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
        const responseItem = await insertMaster(body);
        console.log(body);
        
        res.send({
            result:true,
            data:responseItem
        })

    } catch (e) {
        res.send({
            result:false,
            data:e
        })
    }
}

const deleteItem = async ({params} : Request,res:Response) => {
    try {
        const {id} = params;
        const responseItem = await deleteMaster(id);
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

const createMaster = async(req:Request,res:Response) => {
    const {body} =req
     await create(body)

    
}

export {getItem,getItems,deleteItem,updateItem,postItem,createMaster}