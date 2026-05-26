import app from "./src/app.js";
import dotenv from "dotenv";
import database from "./src/Config/db.js";
dotenv.config();
database();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running successfully on port ${port}`);
});
