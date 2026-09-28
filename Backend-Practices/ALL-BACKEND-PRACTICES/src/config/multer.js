import multer from 'multer'
import {nanoid} from 'nanoid'

const uploads = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null, nanoid() + file.originalname)
    }
})

export const sendFiles = multer({storage:uploads})


const store = multer.memoryStorage()

export const cloudFiles = multer({storage:store})