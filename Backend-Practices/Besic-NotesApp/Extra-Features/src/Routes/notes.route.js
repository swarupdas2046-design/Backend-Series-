import express from "express";
import {
  CreateNotes,
  DeleteNotes,
  UpdateNotes,
  ViewALLNotes,
} from "../Controllers/notes.controller.js";
import { NotesModel } from "../Models/notes.models.js";

const Routes = express.Router();

// create notes api
Routes.post("/Notes/create", CreateNotes);

// view notes api
Routes.get("/Notes/view", ViewALLNotes);

// Update Notes Api
Routes.put("/Notes/update/:id", UpdateNotes);

// Delete Notes Api
Routes.delete("/Notes/delete/:id",DeleteNotes);

export default Routes;
