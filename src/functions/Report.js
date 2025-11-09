import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

export async function sendReport() {
    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: process.env.MAIL_RECEPT,
        subject: 'Prueba desde Nodemailer',
        text: '¡Hola! Este es un correo de prueba.'
    })


}