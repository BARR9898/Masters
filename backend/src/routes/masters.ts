import { Request,Response,Router } from "express";
import { getItems, postItem,getItem, updateItem, deleteItem, createMaster } from "../controllers/master";
import { logMiddleware } from "../middleware/log";
import { create } from "../services/masters";

const router = Router();

//router.get("/" , checkJWT, getItems)

router.get("/" , getItems);
router.get("/:id" , logMiddleware, getItem);
router.post("/" , postItem);
router.put("/:id" , updateItem);
router.delete("/:id" , deleteItem);




export {router};