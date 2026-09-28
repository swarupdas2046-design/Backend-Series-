import express from "express";
import { cloudFiles, sendFiles } from "../config/multer.js";
import upload from "../config/imagekit.js";

const postRouter = express.Router();

// this is for multiple files

postRouter.post("/multiple", sendFiles.array("image"), (req, res) => {
  console.log("From PostMan :---->", req.body);
  console.log("Form postman files :---->", req.files);

  return res.send("Okay");
});

// this is for single file

postRouter.post("/single", sendFiles.single("image"), (req, res) => {
  console.log("From PostMan :---->", req.body);
  console.log("Form postman files :---->", req.file);

  return res.send("Okay");
});

// this is for ImageKit 

postRouter.post(
  "/cloudSingle",
  cloudFiles.single("image"),
  async (req, res) => {
    console.log("From postman :---->", req.file);

    const { originalname, buffer } = req.file;

    const response = await upload(buffer, originalname);

    return res.status(201).json({
      message: "File Uploaded Successfully",
      response,
    });
  },
);

postRouter.post("/cloudMulti",cloudFiles.array("images"), async(req,res)=>{
  
console.log("from Postman:---->",req.files);

const fileData = req.files

const response = await Promise.all(fileData.map((elem)=>{
    return upload(elem.buffer,elem.originalname)
}))

const imageURL = response.map((elem)=> elem.url)


    return res.status(201).json({
      message: "File Uploaded Successfully",
      imageURL,
    });


})



export default postRouter;
