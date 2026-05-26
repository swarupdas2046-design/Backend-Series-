import mongoose from "mongoose";

const NotesSchema = mongoose.Schema({
    title:String,
    description:String,
})

const NotesModel = await mongoose.model("Notes_Data",NotesSchema)

export default NotesModel