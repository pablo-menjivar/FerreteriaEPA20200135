/*
"Suppliers": [
 {
    "name": "Supplier A",
    "contact": "contact@suppliera.com",
    "phone": "1234567890",
    "address": "123 Main St, City"
 }
] */
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose"
// Creamos un nuevo Schema con la estructura de los proveedores
const suppliersSchema = new Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
}, {
    timestamps: true,
    strict: false
})
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Supplier", suppliersSchema, "Supplier")