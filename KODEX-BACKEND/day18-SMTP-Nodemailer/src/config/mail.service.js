import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "swarupdas2046@gmail.com",
    pass: "zqzftxycgtmmblta",
  },
});

const SendEmail = async (to, subject, text) => {
  const option = {
    from: "swarupdas2046@gmail.com",
    to,
    subject,
    text,
  };
  await transporter.sendMail(option);
};

export default SendEmail;
