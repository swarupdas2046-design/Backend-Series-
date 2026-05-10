import express from 'express'
import { DeleteData, ReadData, RegisterData, UpdateData } from '../Controllers/TodoList.controller.js'

const route = express.Router()

route.post("/create",RegisterData)
route.get("/",ReadData)
route.put("/update/:id",UpdateData)
route.delete("/delete/:id",DeleteData)
export default route