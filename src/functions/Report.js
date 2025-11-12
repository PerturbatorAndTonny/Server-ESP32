import nodemailer from "nodemailer";
import {
  averageCelsius,
  averageFahrenheit,
  averageHumidity,
  hmtlReport,
} from "./method.js";

const A = averageCelsius();
const B = averageFahrenheit();
const C = averageHumidity();

const sheet = hmtlReport(A, B, C);

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
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_RECEPT,
    subject: "Registro Semanal de Riego",
    html: sheet,
  });
}
