import nodemailer from "nodemailer";
import {
  avgRecord, hmtlReport
} from "./method.js";



const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendReport() {

  const A = avgRecord("Relative_Humidity");
  const B = avgRecord("Relative_Celsius");
  const C = avgRecord("Relative_Fahrenheit");
  const sheet = hmtlReport(A, B, C);


  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_RECEPT,
    subject: "Registro Semanal de Riego",
    html: sheet,
  });
}
