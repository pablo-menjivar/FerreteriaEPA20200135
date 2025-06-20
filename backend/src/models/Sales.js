/* 
"Sales": [
    {
        "product": "Laptop",
        "category": "Electronics",
        "customer": "John Doe",
        "total": 1200,
        "date": "2023-04-10"
    }
] */
// Importo modelo y schema de Mongoose
import { Schema, model } from "mongoose"
// Creo un nuevo Schema con la estructura de las ventas
const salesSchema = new Schema(
    {
        product: { type: String, required: true },
        category: { type: String, required: true },
        customer: { type: String, required: true },
        total: { type: Number, required: true },
        date: { type: Date, required: true }
    }, {
        timestamps: true,
        strict: false,
})
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Sales", salesSchema, "Sales")