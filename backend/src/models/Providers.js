/*
"Providers": [
    {
      "name": "OpenAI",
      "phoneNumber": "2345-6789",
      "image": "https:/es.image.url.com"
   }
] */
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose"
// Creamos un nuevo Schema con la estructura de los proveedores
const providersSchema = new Schema(
    {
        name: { type: String, /* required: true */ },
        phoneNumber: { type: String, /* required: true */ },
        image: { type: String, /* required: true */ }
    },
          {
        timestamps: true,
        strict: false,
    }
)
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Provider", providersSchema, "Provider")