/*
 "Category": {
    "name": "Electronics",
    "description": "Electronics products",
    "isActive": false
 } */
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose"
// Creamos un nuevo Schema con la estructura de las categorías
const categoriesSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    isActive: { type: Boolean, required: true }
}, {
    timestamps: true,
    strict: false
})
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Category", categoriesSchema, "Category")