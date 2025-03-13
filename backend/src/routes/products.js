// Importo la libreria express
import express from "express";
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router();
// Importo el controlador de productos
import productsController from "../controllers/productsController.js";
// Rutas que no requieren un parámetro en específico
router
  .route("/")
  .get(productsController.getProducts)
  .post(productsController.createProducts);
// Rutas que utilizan el id como parametro
router
  .route("/:id")
  .get(productsController.getProduct)
  .put(productsController.updateProducts)
  .delete(productsController.deleteProducts);
// Exporto el router para poder usarlo en otros archivos
export default router;
