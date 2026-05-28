import mongoose from "mongoose";
// ------ create Schema for Notes ----
const NotesSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: String,
    user:String,
  },
  {
    timestamps: true,
  },
);

// ------ create Model for Notes ----

export const NotesModel = mongoose.model("notes", NotesSchema);
