// Aqui en el controlador, irán el método de CREATE (C) que se utilizará en la ruta de inicio de sesion
//Array de funciones vacías
const loginController = {}
// Importo el modelo de empleados
import loginModel from "../models/Employees.js"
// Importo el modelo de clientes
import customersModel from "../models/Customers.js"
// Importo la libreria 'bcryptjs'
import bcryptjs from "bcryptjs"
// Importo la libreria 'jsonwebtoken'
import jsonwebtoken from "jsonwebtoken"
// Importo el archivo 'config'
import { config } from "../utils/config.js"
//POST (CREATE)
loginController.login = async (req, res) => {
    const {email, password} = req.body

    try {
        //Declarar la variable 'userFound'
        let userFound //Se guarda el usuario encontrado
        //Declarar la variable 'userType'
        let userType //Se guarda el tipo de usuario (admin o employee)
        //Tipos de usuario: admin, empleados, clientes
        if (email === config.CREDENTIALS.email && password === config.CREDENTIALS.password) {
            userType = "admin",
            userFound = {_id: "admin"}
            console.log("Este es el tipo de usuario que esta guardando: " + userType)
        } else {
            //Para ver si es empleado o no
            userFound = await loginModel.findOne({email})
            userType = "employee"
            //Finalmente si no encuentra absolutamente nada, se va a buscar a los clientes
            if (!userFound) {
                userFound = await customersModel.findOne({email: "customer"})
                userType = "customer"
                console.log("Este es el tipo de usuario que esta guardando: " + userType)
            }
        }
        //Si el usuario DE VERDAD NO FUE ENCONTRADO se va a responder con un mensaje de error
        if (!userFound) {
            return res.json({message: "El usuario no existe"})
        } 
        // Verificar si el usuario está bloqueado
        if (userType !== "admin") {
            if (userFound.timeOut !== null && Date.now() > userFound.timeOut) {
                const remainingMinutes = Math.floor((userFound.timeOut - Date.now()) / 60000)
                res.status(401).json({message: "El usuario está bloqueado", remainingMinutes: remainingMinutes})
            }
        }
        //Desencriptar la contraseña si el usuario no es admin
        if (userType !== "admin") {
            //Variable para almacenar el hash de la contraseña
            const isMatch = bcryptjs.compare(password, userFound.password)
            if (!isMatch) {

                // Si se equivoca de contraseña,, sumar 1 a los intentos fallidos
                userFound.loginAttemps += 1
                //Si los intentos fallidos son 3, bloquear el usuario
                if (userFound.loginAttemps >= 3) {
                    // Bloqueamos la cuenta con morbo
                    userFound.timeOut = Date.now() + 3600000 * 24 //Bloquear el usuario por 24 horas
                    await userFound.save()
                    return res.status(403).json({message: "Contraseña incorrecta", remainingMinutes: 0})
                }
                return res.status(403).json({message: "Contraseña incorrecta"})
            }
            //Limpiamos los campos
            userFound.loginAttemps = 0
            userFound.timeOut = null
            await userFound.save()
        }
        //TOKEN
        jsonwebtoken.sign({id: userFound._id, userType}, config.JWT.secret, { expiresIn: config.JWT.expiresIn}, (err, token) => {
            if(err) console.log("error")
            res.cookie("authToken", token)
            //return res.json({message: "Error al generar el token", error: err.message});
            res.json({message: "Inicio de sesión exitoso"})
            //res.json({message: "Inicio de sesión exitoso", token: token});
            //return res.json({message: "Inicio de sesión exitoso", token: token});
        })
    } catch (error) {
        console.log("error", error)
        res.json({message: "Error al iniciar sesión", error: error.message})
    }
}
export default loginController