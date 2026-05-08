import app from './src/app.js'
import { database } from './src/config/database.js';

database()

app.listen(5000,()=>{
  console.log('Server run successfully on port 5000');
})