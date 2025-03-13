/*
"Branches": [
    {
      "name": "Downtown Store",
      "address": "789 Central Blvd, City",
      "phoneNumber": "1777-8999",
      "schedule": "Mon-Fri 9:00-18:00, Sat 10:00-14:00"
    }
]
*/
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose";
// Creamos un nuevo Schema con la estructura de las sucursales
const branchesSchema = new Schema(
    {
        name: { type: String, require: true },
        address: { type: String, require: true },
        phoneNumber: { type: String, require: true },
        schedule: { type: String, require: true }
    },
    {
        timestamps: true,
        strict: false,
    }
);
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Branch", branchesSchema, "Branch");