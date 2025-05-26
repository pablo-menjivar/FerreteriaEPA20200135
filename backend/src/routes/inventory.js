// Importo la libreria express
import express from "express"
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router()
// Importo el controlador de inventario
import inventoryController from "../controllers/inventoryController.js"
// Rutas que no requieren un parámetro en específico
router
  .route("/")
  .get(inventoryController.getInventory)
  .post(inventoryController.postInventory)
// Rutas que utilizan el id como parametro
router
  .route("/:id")
  .get(inventoryController.getInventory1)
  .put(inventoryController.putInventory)
  .delete(inventoryController.deleteInventory)
// Exporto el router para poder usarlo en otros archivos
export default router