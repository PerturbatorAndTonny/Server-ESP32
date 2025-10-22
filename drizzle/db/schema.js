import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const wateredTable = sqliteTable("irrigate", {
    Id_Irrigate_Cout: int().primaryKey({ 
        autoIncrement: true,
        onConflict: 'abort'
    }).notNull(),
    Relative_Humidity: text().notNull(),
    Relative_Celsius: text().notNull(),
    Relative_Fahrenheit: text().notNull()
})
