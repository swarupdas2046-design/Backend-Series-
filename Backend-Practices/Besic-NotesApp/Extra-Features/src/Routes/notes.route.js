import express from 'express'
import { CreateNotes, ViewALLNotes } from '../Controllers/notes.controller.js'
import { NotesModel } from '../Models/notes.models.js'


const Routes = express.Router()

// create notes api 
Routes.post("/Notes/create",CreateNotes)

// view notes api
Routes.get("/Notes/view",ViewALLNotes)



export default Routes
