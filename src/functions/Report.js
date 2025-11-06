import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 465,
    secure: true,
    auth: {
        user: '',
        pass: ''
    }
})

async function sendReport() {
    await transporter.sendMail({
        from: '"Santiago" <> ',
        to: "santiagohortua10@gmail.com",
        subject: "Reporte de regado semanal ",
        html: "<b> Hello World?</b>"

    })


}