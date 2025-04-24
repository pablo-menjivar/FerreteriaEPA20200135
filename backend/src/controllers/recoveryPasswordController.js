// Aqui en el controlador, irán el método de CREATE (C) que se utilizará en la ruta de registro
//Array de funciones vacías
const recoveryPasswordController = {}
// Importo el modelo de clientes
import customersModel from "../models/Customers.js"
// Importo el modelo de empleados
import employeesModel from "../models/Employees.js"
// Jsonwebtoken es para generar un token de autenticación
// Bcryptjs es para encriptar la contraseña
// Importo la libreria 'bcryptjs'
import bcryptjs from "bcryptjs"
// Importo la libreria 'jsonwebtoken'
import jsonwebtoken from "jsonwebtoken"
// Importo las constantes 'sendEmail' y 'HTMLRecoveryEmail' del archivo 'utils/mailRecoveryPassword.js'
import { sendEmail, HTMLRecoveryEmail } from "../utils/mailRecoveryPassword.js"
// Importo el archivo 'config'
import { config } from "../utils/config.js"
//Post (Create)
recoveryPasswordController.requestCode = async (req, res) => {
    //Obtener el email del cuerpo de la solicitud
    const email = req.body.email
    try {
        let userFound
        let userType
        //Verificación de si el usuario ya existe o no, si no, se va a registrar 2 veces
        userFound = await customersModel.findOne({email: req.body.email})
        if (userFound){
            userType = "customer"
        } else {
            userFound = await employeesModel.findOne({email: req.body.email})
            if (userFound){
                userType = "employee"
            } else {
                return res.json({message: "El cliente no existe"})
            }
        }
        if (!userFound) {
            return res.json({message: "El usuario no existe"})
        }
        //Generar un código aleatorio para enviarselo al cliente
        const code = Math.floor(10000 + Math.random() * 90000).toString()
        //TOKEN
        const token = jsonwebtoken.sign({email, code, userType, verified: false}, config.JWT.secret, { expiresIn: "20m"})
        //El token se almacenará en una cookie
        res.cookie("tokenRecoveryCode", token, {maxAge: 2*60*1000})
        //Enviar el correo electrónico
        await sendEmail(email, "Código de recuperación de contraseña", `Tu código de recuperación es: ${code}`, HTMLRecoveryEmail(code))
        res.json({message: "Código de recuperación enviado"})
    } catch (err) {
        console.log("error: ", err)
    }
}
export default recoveryPasswordController