/*
 "Inventory": [
    {
        "productName": "iPhone 12",
        "currentQuantity": 10,
        "minimumStock": 5,
        "lastUpdate": "2023-04-10T12:34:56Z"
    }
 ] */
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose"
// Creamos un nuevo Schema con la estructura de la inventario
const inventorySchema = new Schema({
    productName: { type: String, required: true },
    currentQuantity: { type: Number, required: true },
    minimumStock: { type: Number, required: true },
    lastUpdate: { type: Date, required: true }
}, {
    timestamps: true,
    strict: false
})
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Inventory", inventorySchema, "Inventory")