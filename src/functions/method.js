import { db } from "../../drizzle.config.js";
import { wateredTable } from '../../drizzle/db/schema.js'

export async function avgRecord(type) {
  let sum = 0;
  const recordCaptured = await db.select().from(wateredTable);

  if (type === "Relative_Humidity") {
    recordCaptured.forEach((avg) => {
      sum += Number.parseFloat(avg.Relative_Humidity);
      console.log(sum);
    });
  }

  if (type === "Relative_Celsius") {
    recordCaptured.forEach((avg) => {
      sum += Number.parseFloat(avg.Relative_Celsius);
      console.log(sum);
    });
  }

  if (type === "Relative_Fahrenheit") {
    recordCaptured.forEach((avg) => {
      sum += Number.parseFloat(avg.Relative_Fahrenheit);
      console.log(sum);
    });
  }
  const result = sum / recordCaptured.length;
  return result;
}

export function hmtlReport(
  averageAirHumidity,
  averageSoilHumidity,
  averageIrrigationTemperature
) {
  return `
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Informe de Datos de Riego</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #4CAF50;
          text-align: center;
        }
        p {
          font-size: 16px;
          line-height: 1.6;
          color: #333;
        }
        .data-table {
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;
        }
        .data-table th, .data-table td {
          padding: 10px;
          text-align: center;
          border: 1px solid #ddd;
        }
        .data-table th {
          background-color: #4CAF50;
          color: white;
        }
        .data-table td {
          background-color: #f9f9f9;
        }
        .footer {
          text-align: center;
          font-size: 14px;
          color: #777;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>

      <div class="container">
        <h1>Informe de Datos de Riego</h1>
        <p>Estimado usuario,</p>
        <p>A continuación, te mostramos el promedio de los datos relevantes para el sistema de riego:</p>

        <table class="data-table">
          <tr>
            <th>Dato</th>
            <th>Valor</th>
          </tr>
          <tr>
            <td>Humedad relativa</td>
            <td>${averageAirHumidity} %</td>
          </tr>
          <tr>
            <td>Temperatura celsius</td>
            <td>${averageSoilHumidity} %</td>
          </tr>
          <tr>
            <td>Temperatura celsius Fahrenheit</td>
            <td>${averageIrrigationTemperature} °C</td>
          </tr>
        </table>

        <div class="footer">
          <p>Este informe es automático, por favor no respondas a este correo.</p>
        </div>
      </div>

    </body>
    </html>
    `;
}
