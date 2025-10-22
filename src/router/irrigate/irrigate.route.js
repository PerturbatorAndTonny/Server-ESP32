import { Router } from "express"
import { createRecord } from "../../controller/irrigate/irrigate.controller.js"

const routerIrrigate = Router()

routerIrrigate.post('/createIrrigate', createRecord)

export default routerIrrigate