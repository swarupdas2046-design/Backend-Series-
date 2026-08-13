import nodemailer from 'nodemailer'

const Transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"swarupdas2046@gmail.com",
        pass: process.env.GOOGLE_APP_PASSWORD,
    }
})


const SendEmail = async(to,subject,html)=>{
    const option = {
        from:"swarupdas2046@gmail.com",
        to,
        subject,
        html
    }

    await Transporter.sendMail(option)
}

export default SendEmail