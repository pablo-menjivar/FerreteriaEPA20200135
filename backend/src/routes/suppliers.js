// Importo la libreria express
import express from "express"
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router()
// Importo el controlador de categorías
import suppliersController from "../controllers/suppliersController.js"
// Rutas que no requieren un parámetro en específico
router
  .route("/")
  .get(suppliersController.getSuppliers)
  .post(suppliersController.postSuppliers)
// Rutas que utilizan el id como parametro
router
  .route("/:id")
  .get(suppliersController.getSupplier)
  .put(suppliersController.putSuppliers)
  .delete(suppliersController.deleteSuppliers)
// Exporto el router para poder usarlo en otros archivos
export default router