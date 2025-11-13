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
  // Resuelve las promesas de los valores
  const A = await avgRecord("Relative_Humidity");
  const B = await avgRecord("Relative_Celsius");
  const C = await avgRecord("Relative_Fahrenheit");

  console.log('Promedio de Humedad del Aire:', A);
  console.log('Promedio de Temperatura Celsius:', B); 
  console.log('Promedio de Temperatura Fahrenheit:', C);  

  const sheet = hmtlReport(A, B, C);
  console.log(sheet)

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_RECEPT,
    subject: "Registro Semanal de Riego",
    html: sheet, 
  });
}