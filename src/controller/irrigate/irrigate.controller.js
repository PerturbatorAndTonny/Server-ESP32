import { drizzle } from "drizzle-orm/better-sqlite3"
import { wateredTable } from "../../../drizzle/db/schema.js"
import { format } from "@formkit/tempo"

const db = drizzle(process.env.DB_FILE_NAME)

export const createRecord = async (req, res) => {
    try {
        const { humidity, celsius, fahrenheit } = req.body
        const date = format(new Date(), { date: "full", time: "short" })
        const newRecord = await db.insert(wateredTable).values({
            Relative_Humidity: String(humidity),
            Relative_Celsius: String(celsius),
            Relative_Fahrenheit: String(fahrenheit),
            DateIrrigate: date
        }).returning()
        return res.status(200).json({
            message: "new irraget recorded",
            data: newRecord
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}