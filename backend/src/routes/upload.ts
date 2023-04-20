import { Router } from "express";
import {getImages,createImage,getImage,deleteImage,updateImage} from "../controllers/upload";
import { logMiddleware } from "../middleware/log";
import multer from "../utils/multer";

const router = Router();

//router.get("/" , checkJWT, getItems)

router.post("/image" , multer.single('image') ,createImage)
router.get('/images',getImages)
router.get('/image/:id',getImage)
router.delete('/image/:id',deleteImage)
router.put('/image/:id',updateImage)

export {router};