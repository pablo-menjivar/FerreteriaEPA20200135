/*
"Employees": [
    {
      "name": "Michael",
      "lastName": "Johnson",
      "birthday": "1988-03-10",
      "email": "michael.j@company.com",
      "address": "123 Main St, City",
      "hireDate": "2020-01-15",
      "password": "hashedpassword789",
      "phoneNumber": "+1555666777",
      "DUI": "45678912-3",
      "isssNumber": "ISSS001234",
      "isVerified": true
    }
] */
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose";
// Creamos un nuevo Schema con la estructura de los empleados
const employeesSchema = new Schema(
    {
        name: { type: String, required: true },
        lastName: { type: String, required: true },
        birthday: { type: Date, required: true },
        email: { type: String, required: true, unique: true },
        address: { type: String, required: false },
        hireDate: { type: Date, required: false },
        password: { type: String, required: true, unique: true },
        phoneNumber: {
            type: String,
            required: true,
            // Basic phone number validation (adjust regex as needed)
            match: /^\+?\d{8,}$/,
        },
        DUI: {
            type: String,
            required: true,
            // Basic DUI format validation (adjust regex as needed for specific format)
            match: /^\d{8}-\d{1}$/,
        },
        issNumber: {
            type: String,
            required: true,
            // Basic ISSS number format validation (adjust regex as needed for specific format)
            match: /^ISSS\d{6}$/,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Basic email validation
            match: /^\S+@\S+\.\S+$/,

        },
        isVerified: { type: Boolean, required: true }
    },
    {
        timestamps: true,
        strict: false,
    }
);
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Employee", employeesSchema, "Employee");