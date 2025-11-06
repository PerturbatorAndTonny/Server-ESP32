import cron from 'node-cron';
import sendReport from '../functions/Report.js'
export function cronometer() {
    cron.schedule('* * * * * 7', () => {
    const info = sendReport () 
        console.log('Reporte enviado con ID: ' , info.messageId);
    })
}