import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

const TodoModel = mongoose.model("TodoData",TodoSchema)

export default TodoModel
