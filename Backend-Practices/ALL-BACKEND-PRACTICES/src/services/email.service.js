import nodemailer from "nodemailer";

const Transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_Password,
  },
});

const SendEmail = async (to, subject, html) => {
  const option = {
    from: process.env.SMTP_USER,
    to,
    subject,
    html,
  };

  const response = await Transporter.sendMail(option);
  console.log("Mail Response:---->", response);
};

export default SendEmail;
