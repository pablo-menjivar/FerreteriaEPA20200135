// Importo la libreria express
import express from "express";
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router();
// Importo el controlador de sign up
import signupController from "../controllers/signupController.js";
// Solo sería la ruta del Post o Create
router.route("/").post(signupController.register);
export default router;