import multer from 'multer'
import {nanoid} from 'nanoid'

// const store = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"Uploads/")
//     },
//     filename:(req,file,cb)=>{
//         cb(null, nanoid() + file.originalname)
//     }
// })

const store = multer.memoryStorage()

export const Send_file = multer({storage:store})