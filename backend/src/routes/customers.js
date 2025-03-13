// Importo la libreria express
import express from "express";
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router();
// Importo el controlador de clientes
import customersController from '../controllers/customersController.js';
// Rutas que no requieren un parámetro específico
router
  .route("/")
  .get(customersController.getCustomers)
  .post(customersController.postCustomers)
// Rutas que requieren un parámetro específico
router
  .route("/:id")
  .get(customersController.getCustomer)
  .put(customersController.putCustomers)
  .delete(customersController.deleteCustomers)
// Exporto el router para poder usarlo en otros archivos
export default router;