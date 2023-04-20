import { Request,Response } from "express"
import image from "../models/image"
import path from 'path'
import fs from 'fs-extra'

const multer =  require('multer')


const getImage = async(req:Request,res:Response):Promise<Response>=> {
    const {id} = req.params
    const imageFinded = await image.findById(id);
    return res.json({
        result:true,
        image: imageFinded
    })
}

const createImage = async(req:Request,res:Response): Promise<Response> => {
    

    const {title,description} = req.body

    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file?.path
    }
    
    const imageToSave = new image(newPhoto)

    await imageToSave.save()

    return res.json({
        result:true,
        message: 'Imagen guardada',
        imagen: imageToSave
    })

}

const getImages = async (req:Request,res:Response): Promise<Response> => {
    const images = await image.find();
    return res.json({
        result:true,
        images: images
    })
}

const deleteImage = async (req:Request,res:Response): Promise<Response> => {

    //Remover de la BDD
    const {id} = req.params
    const imageDeleted = await image.findByIdAndDelete(id);

    //Remover del servidor 
    if(imageDeleted){
        fs.unlink(path.resolve(imageDeleted.imagePath))
    }

    return res.json({
        result:true,
        imageDeleted: imageDeleted
    })
}

const updateImage = async (req:Request,res:Response): Promise<Response> => {


    const {id} = req.params
    const {title,description} = req.body
    console.log(req.body);
    

    const imageUpdated = await image.findOneAndUpdate({id},{title,description});

    return res.json({
        result:true,
        message:'Actualización correcta',
        imageDeleted: imageUpdated
    })
}

export {getImages,createImage,getImage,deleteImage,updateImage}