/*
"Customers": [
    {
      "name": "John",
      "lastName": "Doe",
      "birthday": "1990-05-15",
      "email": "john.doe@email.com",
      "password": "hashedpassword123",
      "phoneNumber": "+1234567890",
      "DUI": "12345678-9",
      "isVerified": true
    }
] */
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose";
// Creamos un nuevo Schema con la estructura de los clientes
const customersSchema = new Schema(
    {
        name: { type: String, require: true },
        lastName: { type: String, require: true },
        birthday: { type: Date, require: true },
        email: { type: String, require: true },
        password: { type: String, require: true },
        phoneNumber: { type: String, require: true },
        DUI: { type: String, require: true },
        isVerified: { type: Boolean, require: true },
        loginAttemps: { type: Number, default: 0 },
        timeOut: { type: Date, default: null }
    },
    {
        timestamps: true,
        strict: false,
    }
);
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Customer", customersSchema, "Customer");