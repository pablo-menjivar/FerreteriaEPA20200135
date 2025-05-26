// Importo la libreria express
import express from "express"
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router()
// Importo el controlador de categorías
import categoriesController from "../controllers/categoriesController.js"
// Rutas que no requieren un parámetro en específico
router
  .route("/")
  .get(categoriesController.getCategories)
  .post(categoriesController.postCategories)
// Rutas que utilizan el id como parametro
router
  .route("/:id")
  .get(categoriesController.getCategory)
  .put(categoriesController.putCategories)
  .delete(categoriesController.deleteCategories)
// Exporto el router para poder usarlo en otros archivos
export default router