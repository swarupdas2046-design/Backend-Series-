import { NotesModel } from '../Models/notes.models.js'

// create New Notes
export const CreateNotes = async(req,res)=>{
    try {
        const {title,description,category,priority} = req.body
        // check all the fields 

        if (!title || !description || !priority) {
            return res.status(400).json({
                massage:"All Fields Are Required"
            })
        }

        if (title.trim().length<3) {
            return res.status(400).json({
                massage:"Title must be at least 3 characters long"
            })
        }
        if (description.trim().length<10) {
            return res.status(400).json({
                massage:"Description must be at least 10 characters long"
            })
        }

        // create Notes 

        const NewNotes = await NotesModel.create({
            title,
            description,
            priority,
            category,
        })

        return res.status(201).json({
            massage:"Your Notes Created Successfully",
            notes:NewNotes,
        })

    } catch (error) {
        res.status(500).json({
            massage:"Internal Server Error",
            error,
        })
    }
}

// view Existing Notes 

export const ViewALLNotes = async(req,res)=>{
    const AllNotes = await NotesModel.find()
    return res.status(200).json({
        massage:"All Notes Are fetched are Successfully",
        AllNotes,
    })
}