import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: String,
  },
  {
    timestamps: true,
  },
);

export const NotesModel = mongoose.model("notes", NotesSchema);
