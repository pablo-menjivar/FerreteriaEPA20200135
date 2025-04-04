// Importo la libreria express
import express from "express"
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router()
// Importo el controlador de reseñas
import reviewsController from "../controllers/reviewsController.js"
// Rutas que no requieren un parámetro en específico
router
  .route("/")
  .get(reviewsController.getReviews)
  .post(reviewsController.postReviews)
// Rutas que utilizan el id como parametro
router
  .route("/:id")
  .get(reviewsController.getReview)
  .put(reviewsController.putReviews)
  .delete(reviewsController.deleteReviews)
// Exporto el router para poder usarlo en otros archivos
export default router