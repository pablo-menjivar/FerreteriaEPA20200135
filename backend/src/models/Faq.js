/*
    "FAQ": [
      {
        "question": "¿Cómo funciona la aplicación?",
        "answer": "La aplicación funciona de la siguiente manera:..."
        "level": "1"
        "isActive": true
      }
    ]
*/
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose"
// Creamos un nuevo Schema con la estructura de la FAQ
const faqSchema = new Schema({
    question: { type: String, required: true, minLegth: 4, maxLegth: 100, trim: true},
    answer: { type: String, required: true, minLegth: 40, maxLegth: 1000, trim: true },
    level: { type: Number, required: true, min: 1, max: 10, trim: true },
    isActive: { type: Boolean, required: true, default: true }
}, {
    timestamps: true,
    strict: false
})
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("FAQ", faqSchema, "FAQ")