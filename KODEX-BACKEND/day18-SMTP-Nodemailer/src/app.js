import express from "express";
import SendEmail from "./config/mail.service.js";

const app = express();

app.use(express.json());

app.get("/sendmail", async (req, res) => {
  await SendEmail(
    "daspriti1021@gmail.com",
    "hey greeting mail",
    "Hey,Just wanted to see how you're doing. Let's catch up soon over the phone or grab some food.Hope everything is good with you!Best,swarup Das",
  );

  return res.send("Chala gaya mail Client ke pas");
});

export default app;
