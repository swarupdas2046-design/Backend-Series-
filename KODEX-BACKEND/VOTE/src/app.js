import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// console.log("Current directory :--->",__dirname);

const app = express()

app.use(express.static(path.join(__dirname,"..",'public')))

// console.log("path Location:-->",path.join(__dirname,"..",'public'));

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('This is The first page of this website')
})

export default app