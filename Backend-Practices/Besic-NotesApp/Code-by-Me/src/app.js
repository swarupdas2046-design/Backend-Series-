import express from "express";
import { NotesModel } from "./Models/notes.model.js";

const app = express();
app.use(express.json());

app.post("/api/notes/create", async (req, res) => {
    try {
            const {title,description} = req.body
            if(!title || !description){
                return res.status(400).json({
                    message:"All fields are required"
                })
            }
            if (title.trim().length<3) {
                return res.status(400).json({
                    message:"Title must be at least 3 characters long"
                })
            }
            if (description.trim().length<10) {
                return res.status(400).json({
                    message:"Description must be at least 10 characters long"
                })
            }
            const NewNote = await NotesModel.create({
                title,
                description
            })
            return res.status(201).json({
                message:"Note created Successfully",
                note:NewNote
            })


    } catch (error) {
        return res.status(500).json({
            message:"Internal Server error",
            error:error.massage
        })
    }
})

app.get("/api/Get-All-Notes",async(req,res)=>{
        try {
            const Notes = await NotesModel.find()
            return res.status(200).json({
                message:"All Notes Fetched Successfully",
                notes:Notes,
            })
        } catch (error) {
            return res.status(500).json({
                message:"Internal Server error"
            })
        }
})

app.patch("/api/notes/:id",async(req,res)=>{
    try {
        const {id} = req.params
        const {description} = req.body
        if (!description) {
            return res.status(400).json({
                message:"All fields are required"
            })
        }
        if (description.trim().length<10) {
            return res.status(400).json({
                message:"Description must be at least 10 characters long"
            })
        }
        const UpdatedNote = await NotesModel.findById(id)
        UpdatedNote.description = description
        await UpdatedNote.save()
        return res.status(200).json({
            message:"Note Updated Successfully",
            note:UpdatedNote
        })

    } catch (error) {
        return res.status(500).json({
            message:"Internal Server error"
        })
    }
})



export default app;
