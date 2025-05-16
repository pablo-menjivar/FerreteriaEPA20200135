// Aqui en el controlador, irán el método de CREATE (C) que se utilizará en la ruta de registro
//Array de funciones vacías
const signupController = {}
// Importo el modelo de empleados
import employeesModel from "../models/Employees.js"
// Importo el modelo de clientes
import customersModel from "../models/Customers.js"
// Importo la libreria 'bcryptjs'
import bcryptjs from "bcryptjs"
// Importo la libreria 'jsonwebtoken'
import jsonwebtoken from "jsonwebtoken"
// Importo el archivo 'config'
import { config } from "../utils/config.js"
//POST (CREATE)
signupController.registerEmployee = async (req, res) => {
    const {name, lastName, birthday, email, address, hireDate, password, phoneNumber, DUI, issNumber, isVerified} = req.body

    try {
        //Verificación de si el empleado ya existe o no, si no, se va a registrar 2 veces😬
        const employeeExist = await employeesModel.findOne({email})
        //Si existe un empleado, entonces se va a responder con un mensaje de error
        if(employeeExist){
            return res.json({message: "El empleado ya existe"})
        }
        //Encriptacion de contraseña
        const hashedPassword = await bcryptjs.hash(password, 10)
        //Como en los otros controladores del CRUD
        const newUser = new employeesModel({name, lastName, birthday, email, address, hireDate, password: hashedPassword, phoneNumber, DUI, issNumber, isVerified})
        //Guardado del nuevo empleado
        await newUser.save()
        //TOKEN
        jsonwebtoken.sign({id: newUser._id}, config.JWT.secret, { expiresIn: config.JWT.expiresIn}, (err, token) => {
            if(err) console.log("error")
            res.cookie("authToken", token)
            //return res.json({message: "Error al generar el token", error: err.message});
            res.json({message: "Registro exitoso"})
            //res.json({message: "Registro exitoso", token: token});  
            //return res.json({message: "Registro exitoso", token: token});
        })
        res.json({message: "Empleado registrado"})
    } catch (error) {
        console.log("error", error)
        res.json({message: "Error al registrar el empleado", error: error.message})
    }
}
export default signupController