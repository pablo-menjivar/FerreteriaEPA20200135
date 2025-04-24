// Importo la libreria express
import express from "express"
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router()
// Importo el controlador de recuperar contraseña
import recoveryPasswordController from "../controllers/recoveryPasswordController.js"
// Solo sería la ruta del Post o Create
router.route("/").post(recoveryPasswordController.requestCode)
// Exporto el router para poder usarlo en otros archivos
export default router