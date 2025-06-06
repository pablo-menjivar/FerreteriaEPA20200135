// Importo la libreria express
import express from "express"
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router()
// Importo el controlador de preguntas frecuentes
import faqController from "../controllers/faqController.js"
// Rutas que no requieren un parámetro específico
router.route("/")
  .get(faqController.getFaqs)
  .post(faqController.postFaq)
// Rutas que requieren un parámetro específico
router.route("/:id")
  .get(faqController.getFaq)
  .put(faqController.putFaq)
  .delete(faqController.deleteFaq)
// Exporto el router para poder usarlo en otros archivos
export default router