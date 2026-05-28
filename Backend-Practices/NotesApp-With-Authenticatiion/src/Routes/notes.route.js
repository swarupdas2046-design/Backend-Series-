import express from "express";
import {
  CreateNotes,
  DeleteNotes,
  UpdateNotes,
  ViewALLNotes,
} from "../Controllers/notes.controller.js";
import { NotesModel } from "../Models/notes.models.js";
import { AuthMiddleware } from "../Middlewares/auth.middleware.js";

const RouteR = express.Router();

// create notes api
RouteR.post("/Notes/create",AuthMiddleware,CreateNotes);

// view notes api
RouteR.get("/Notes/view", AuthMiddleware , ViewALLNotes);

// Update Notes Api
RouteR.put("/Notes/update/:id", AuthMiddleware , UpdateNotes);

// Delete Notes Api
RouteR.delete("/Notes/delete/:id", AuthMiddleware , DeleteNotes);

export default RouteR;
