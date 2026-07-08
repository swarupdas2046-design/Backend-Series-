import express from 'express'
import "dotenv/config"
import cors from 'cors'
import { notesModel } from './Models/notes.models.js'
import path from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, "..", "./Public")));
// app.use(express.static("./Public"))
// http://localhost:300-0/assets/index-CpAMk45C.js

app.post("/createNotes",async(req,res)=>{
    try {
        const {title,description,day} = req.body
    

    const newNote = await notesModel.create({
        title,
        description,
        day,
    })

    return res.status(201).json({
        Message:"Note Created Successfully",
        newNote
    })

    } catch (error) {
        return res.status(500).json({
            Message:"Internal Server Error",
            error:error.message
        })
    }
})

app.get("/getNotes",async(req,res)=>{
    try {
        const ALLNotes = await notesModel.find()

        return res.status(200).json({
            message:"ALL Notes Are Fetched Successfully",
            ALLNotes
        })


    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

app.patch("/update/:id",async(req,res)=>{
    try {
        const id = req.params.id
        const {description} = req.body

    const UpdatedNotes = await notesModel.findByIdAndUpdate(id,{
        description,
    },{
        new:true,
    })

    return res.status(200).json({
        message:"Note Update SuccessFully",
        UpdatedNotes,
    })

    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            error:error.message
        })
    }
})

app.delete("/delete/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        await notesModel.findByIdAndDelete(id)
        return res.status(200).json({
            message:"Note Deleted SuccessFully",
        })

    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            error:error.message
        })
    }
})

console.log(__dirname);

app.use("*name",(req,res)=>{
    // res.send("This is Wild Card")
    res.sendFile(path.join(__dirname,"..","/Public/index.html"))
})


export default app
