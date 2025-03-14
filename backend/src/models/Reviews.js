/* 
"Reviews": [
    {
      "comment": "Great product, fast delivery!",
      "rating": 5,
      "idCustomer": ObjectId("5f3f8e3b7f3b7b2d1c1f3b7b")
    }
] */
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose";
// Creamos un nuevo Schema con la estructura de las reseñas
const reviewsSchema = new Schema(
  {
    comment: { type: String, require: true,},
    rating: { type: Number, require: true, min: 1, max: 5 },
    idCustomer: { type: Schema.Types.ObjectId, ref: "Customer", require: true }
  },
  {
    timestamps: true,
    strict: false,
  }
);
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Review", reviewsSchema, "Review");