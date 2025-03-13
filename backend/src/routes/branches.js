// Importo la libreria express
import express from "express";
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router();
// Importo el controlador de sucursales
import branchesController from "../controllers/branchesController.js";
// Rutas que no requieren un parámetro en específico
router
  .route("/")
  .get(branchesController.getBranches)
  .post(branchesController.postBranches);
// Rutas que utilizan el id como parametro
router
  .route("/:id")
  .get(branchesController.getBranch)
  .put(branchesController.putBranches)
  .delete(branchesController.deleteBranches);
// Exporto el router para poder usarlo en otros archivos
export default router;