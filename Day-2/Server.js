let server = require("express")

let app = server()

app.get("/",(req,res)=>{
    res.send("Hello jii ")
})


app.get("/about",(req,res)=>{
    res.send("This is about page of this company !")
})

app.get("/contact",(req,res)=>{
    res.send("This is Contact page of this company !")
})

 

app.listen(5000)