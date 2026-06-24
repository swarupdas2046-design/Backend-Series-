const { default: mongoose } = require("mongoose");

const NotesSchema = new mongoose.Schema({
    User:String,
    title:String,
    description:String
},{
    timestamps:true
})

const notesModel = mongoose.model("NOTES",NotesSchema)

module.exports = notesModel