import express from "express";
import SendEmail from "./config/mail.service.js";

const app = express();

app.use(express.json());

app.get("/sendmail", async (req, res) => {
  await SendEmail(
    "daspriti1021@gmail.com",
    "KIU re MADARCHOD",
    "MERE bacheee chus le...........",
  );

  return res.send("Chala gaya mail Client ke pas");
});

export default app;
