const express = require("express")
const notesModel = require("./models/notes.model")

const app = express()
app.use(express.json())



app.post("/createNotes",async(req,res)=>{
    try {
        const {title,description,User} = req.body
    
    if (User.trim().length<3) {
        return res.status(400).json({
            Message:"User must be more than three character"
        })
    }

    const newNote = await notesModel.create({
        title,
        User,
        description
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

module.exports = app