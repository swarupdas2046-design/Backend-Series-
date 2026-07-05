import mongoose from "mongoose"

const NotesSchema = new mongoose.Schema({
    day:Number,
    title:String,
    description:String
},{
    timestamps:true
})

export const notesModel = mongoose.model("NOTES",NotesSchema)

