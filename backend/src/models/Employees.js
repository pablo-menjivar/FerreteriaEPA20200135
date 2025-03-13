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
      "telephone": "+1555666777",
      "dui": "45678912-3",
      "isssNumber": "ISSS001234",
      "isVerified": true
    }
] */
// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose";
// Creamos un nuevo Schema con la estructura de los empleados
const employeesSchema = new Schema(
    {
        name: { type: String, require: true },
        lastName: { type: String, require: true },
        birthday: { type: Date, require: true },
        email: { type: String, require: true },
        address: { type: String, require: true },
        hireDate: { type: Date, require: true },
        password: { type: String, require: true },
        telephone: { type: String, require: true },
        dui: { type: String, require: true },
        isssNumber: { type: String, require: true },
        isVerified: { type: Boolean, require: true }
    },
    {
        timestamps: true,
        strict: false,
    }
);
// NUNCA OLVIDAR: colocar el tercer argumento para que se cree la colección con el nombre que queremos,
// ya que por defecto mongoose pluraliza el nombre de la colección
export default model("Employee", employeesSchema, "Employee");