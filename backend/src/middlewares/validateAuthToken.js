// Importo la librería 'jsonwebtoken'
import jsonwebtoken from "jsonwebtoken"
// Importo mi archivo 'config'
import { config } from "../utils/config.js"
//Declaro la variable exportable 💀
export const validateAuthToken = (allowedUserTypes = []) => {
    // Retorno una función flecha
    return (req, res, next) => {
        try {
            const { authToken } = req.cookies
            //Verifico si el token está presente en las cookies
            if (!authToken) {
                //Si no está presente, envío un error 401
                return res.status(401).json({ message: "Token no proporcionado, debes iniciar sesión primero" })
            }
            //Extraigo la información del token
            const decodedToken = jsonwebtoken.verify(authToken, config.JWT.secret)
            console.log("Este es el usuario que esta guardado en el token: " + decodedToken.userType)
            //Verifico si el tipo de usuario es permitido
            if (!allowedUserTypes.includes(decodedToken.userType)) {
                //Si no es permitido, envío un error 403, que es un error de acceso denegado
                return res.status(403).json({ message: "Acceso denegado: Tipo de usuario no permitido" })
            }
            //Si todo es correcto, paso al siguiente middleware
            next()
        } catch (error) {
            //Si hay un error, envío un error 500, que es un error de error interno
            res.status(500).json({ message: "Error al validar el token: " + error.message })
        }
    }
}