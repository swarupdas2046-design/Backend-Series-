let express = require('express')
// craete server 
let app = express()
// this is middleware
app.use(express.json())

let notes = []

app.get('/',(req,res)=>{
    res.send('This is Crud server on port 5000')
})
// create

app.post('/crud',(req,res)=>{
    notes.push(req.body); 
    res.status(201).json({
        massage:'All Okay ThankYou'
    })
})

// read 

app.get('/crud',(req,res)=>{
    res.status(200).json({
        notes
    })
})

// update 

app.patch('/crud/:index',(req,res)=>{
    // console.log("This is request of body-->",req.body);
    // console.log("This is params result -->",req.params.index);
    notes[req.params.index].Discreption = req.body.Discreption
    console.log(notes);
    
    res.status(200).json({
        massage:'Update Successfully'
    })
})

// delete 

app.delete('/crud/:index',(req,res)=>{
    delete notes[req.params.index] 
    res.status(200).json({
        massage:'Deleted Successfully'
    })
})


module.exports = app