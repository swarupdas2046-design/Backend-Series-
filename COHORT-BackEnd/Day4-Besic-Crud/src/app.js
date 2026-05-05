let express = require('express')

let app = express()
app.use(express.json())
// basic crud application ....
let notes = []
// create 
app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.send('Notes Created Successfully')
})

// read 

app.get('/notes',(req,res)=>{
    res.send(notes)
})

// Update

app.patch('/notes/:index',(req,res)=>{
    // console.log("this is req.body-->",req.body.Discreption);
    // console.log("This is req.params -->",req.params)
    notes[req.params.index].Discreption = req.body.Discreption
    console.log(notes)
    res.send('Update Successfully')
})

// delete

app.delete('/notes/:index',(req,res)=>{
    delete notes [req.params.index]
    res.send('Deleted Successfully')
})


module.exports = app