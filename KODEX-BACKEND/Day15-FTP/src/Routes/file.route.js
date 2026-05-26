import express from "express";
import { Send_file } from "../Config/File.config.js";
import Upload_files from "../Config/imagekit.js";

const Routes = express.Router();

Routes.post("/getFiles", Send_file.array("image", 5), async (req, res) => {
  try {
    const files = req.files;

    const Transfer = await Promise.all(
      files.map((elem) => {
        return Upload_files(elem.buffer, elem.originalname);
      }),
    );

    const OnlyUrl = Transfer.map((elem) => elem.url);

    console.log("URL RECEIVE FROM TRANSFER ----> ", OnlyUrl);

    console.log("Transfer From Cloud Storage--->", Transfer);

    return res.json({ message: "File uploaded successfully" });

  } 
  catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ error: error.message || "Upload failed" });
  }
});

export default Routes;
