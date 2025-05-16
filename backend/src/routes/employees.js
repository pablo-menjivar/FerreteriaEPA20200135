// Importo la libreria express
import express from "express"
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router()
// Importo el controlador de empleados
import employeesController from "../controllers/employeesController.js"
// Rutas que no requieren un parámetro en específico
router
  .route("/")
  .get(employeesController.getEmployees)
  .post(employeesController.postEmployees)
// Rutas que utilizan el id como parametro
router
  .route("/:id")
  .get(employeesController.getEmployee)
  .put(employeesController.putEmployees)
  .delete(employeesController.deleteEmployees)
// Exporto el router para poder usarlo en otros archivos
export default router