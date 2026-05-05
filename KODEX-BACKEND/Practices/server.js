let express = require("express");
let app = express(); // express ka instance create hojata hain
// Middle-ware for excepting Json data
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello this the main page of this backend Page");
});
app.get("/about", (req, res) => {
  return res.send("This is the about page of this Website");
});
app.post("/userData", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    massage: "nice",
  });
});
const port = 5000;
app.listen(port, () => {
  console.log(`Server run successfully on port ${port}`);
});
