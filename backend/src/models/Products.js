/* 
"Products": [
  {
    "name": "Laptop X1",
    "description": "High-performance laptop",
    "price": 999.99,
    "stock": 50
  }
] */
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose"
// Creamos un nuevo Schema con la estructura de los productos
const productsSchema = new Schema(
  {
    name: { type: String, require: true,},
    description: { type: String, require: true,},
    price: { type: Number, require: true, min: 0, },
    stock: { type: Number, require: true, min: 0, },
  },
  {
    timestamps: true,
    strict: false,
  }
);
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos, 
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Product", productsSchema, "Product");