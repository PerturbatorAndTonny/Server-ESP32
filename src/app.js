import express from 'express'
import morgan from 'morgan'
import irrigateRouter from './router/irrigate/irrigate.route.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api', irrigateRouter)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Servidor en etapa de desarrollo, ruta no encontrada"
    })
})

export default app
