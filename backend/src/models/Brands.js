/*
"Brands": [
    {
        "name": "Apple",
        "year": 1945,
        "slogan": "Think Different",
        "image": "https:/es.image.url.com"
    }
] */
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose"
// Creamos un nuevo Schema con la estructura de las marcas
const brandsSchema = new Schema(
    {
        name: { type: String, /* required: true */ },
        year: { type: String, /* required: true */ },
        slogan: { type: String, /* required: true */ },
        image: { type: String, /* required: true */ }
    },
    {
        timestamps: true,
        strict: false
    }
)
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Brand", brandsSchema, "Brand")