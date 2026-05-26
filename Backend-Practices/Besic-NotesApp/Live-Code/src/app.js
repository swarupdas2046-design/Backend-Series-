import express from "express";
import NotesModel from "./Models/Notes.models.js";

const app = express();
app.use(express.json());

app.post("/api/notes", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        massage: "ALL FIELDS ARE REQUIRED",
      });
    }

    if (title.trim().length < 3) {
      return res
        .status(400)
        .json({ error: "Title must be at least 3 characters long" });
    }

    if (description.trim().length < 10) {
      return res
        .status(400)
        .json({ error: "Description must be at least 10 characters long" });
    }

    // If validation passes the create note in database

    const NewNote = await NotesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      massage: "Notes Created SuccessFully",
      notes: NewNote,
    });
  } catch (error) {
    return res.status(500).json({
      massage: "Internal server error",
      error: error.massage,
    });
  }
});

export default app;
