// Importo la libreria express
import express from "express"
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const router = express.Router()
// Importo el controlador de preguntas frecuentes
import salesController from "../controllers/salesController.js"
// Rutas que no requieren un parámetro específico
router.route("/").post(salesController.postSales)
// Rutas que requieren un endpoint 
// Ruta de las ventas por categoría
router.route("/category").get(salesController.getSalesByCategory)
// Ruta de las mejores ventas
router.route("/best").get(salesController.getBestSales)
// Ruta de los clientes frecuentes
router.route("/customers").get(salesController.getFrequentCustomers)
// Ruta de las ganancias totales
router.route("/profit").get(salesController.getTotalProfit)
// Ruta de las ventas por fecha
router.route("/date").get(salesController.getSalesByMonth)
// Exporto el router para poder usarlo en otros archivos
export default router