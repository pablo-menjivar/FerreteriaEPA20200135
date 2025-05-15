// Importo la libreria express
import express from "express"
// Importo la libreria multer
import multer from "multer"
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router()
// Importo el controlador de proveedores
import providersController from "../controllers/providersController.js"
// Carpeta local que guarde los registros (.logs) de las imágenes subidas a Cloudinary
const upload = multer({dest: "public/"})
// Rutas que no requieren un parámetro en específico
router.route("/")
  .get(providersController.getProviders)
  .post(upload.single("image"), providersController.postProvider)
// Rutas que utilizan el id como parametro
router.route("/:id")
  .get(providersController.getProvider)
  .put(upload.single("image"), providersController.putProvider)
  .delete(providersController.deleteProvider)
// Exporto el router para poder usarlo en otros archivos
export default router