import multer from "multer";
import path from 'path'

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req,file,cb) => {
        console.log(file);
        console.log(req.file);
        
       cb(null,`${path.extname(file.originalname)}`) 
    }
})

export default multer({storage})