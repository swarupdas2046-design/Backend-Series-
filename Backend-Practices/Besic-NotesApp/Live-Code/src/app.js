import express from "express";
import NotesModel from "./Models/Notes.models.js";

const app = express();
app.use(express.json());

/**
 * @route POST /api/notes
 * @description Create a new note need title and description in the request body
 * @access Public
 */

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

/**
 * @route GET /api/notes
 * @description Get all notes
 * @access Public
 */

app.get("/api/notes", async (req, res) => {
  try {
    const notes = await NotesModel.find();

    res.status(200).json({
      massage: "All Notes are fetched Successfully",
      notes,
    });
  } catch (error) {
    return res.status(500).json({
      massage: "Internal server error",
      error: error.massage,
    });
  }
});


/**
 * @route PATCH /api/notes/:id
 * @description Update a note by id require description in the request body
 * @access Public
 */

app.patch("/api/notes/:id", async (req, res, params) => {
  try {
    const { description } = req.body;
    const { id } = req.params;
    console.log("This id Coming From Frontend--->", id);

    if (!description) {
      return res.status(400).json({
        massage: "Description ARE REQUIRED",
      });
    }

    if (description.trim().length < 10) {
      return res
        .status(400)
        .json({ error: "Description must be at least 10 characters long" });
    }

    const Update = await NotesModel.findById(id);
    if (!Update) {
      return res.status(401).json({
        massage: "Notes Not Found On This Id",
      });
    }
    Update.description = description;
    await Update.save();

    return res.status(200).json({
      massage: "NOTES Updated Successfully",
      Update,
    });
  } catch (error) {
    return res.status(500).json({
      massage: "Internal server error",
      error: error.massage,
    });
  }
});

export default app;
