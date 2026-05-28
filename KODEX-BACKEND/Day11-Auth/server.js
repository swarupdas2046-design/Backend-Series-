import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/Config/database.js";

dotenv.config();
connectDB();


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server run successfully on port ${port}`);
});
