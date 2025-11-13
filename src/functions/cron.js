import cron from 'node-cron';
import {sendReport} from './Report.js'
export function cronometer() {
    cron.schedule('* * * * *', async () => {
        await sendReport() 
        console.log('Mensaje enviado con exito');
    })
}