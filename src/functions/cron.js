import cron from 'node-cron';
import {sendReport} from './Report.js'
export function cronometer() {
    cron.schedule('* 0 9 * * 7', () => {
    const info = sendReport() 
        console.log('Reporte enviado con ID: ' , info.messageId);
    })
}