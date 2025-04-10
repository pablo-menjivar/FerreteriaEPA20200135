// importar todo lo de la libreria "express"
import express from "express"
// importar la constante que contiene el router
import productsRoutes from "./src/routes/products.js"
import customersRoutes from "./src/routes/customers.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
import reviewsRoutes from "./src/routes/reviews.js"
import signupRoutes from "./src/routes/signup.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
//Importo todo lo de la libreria  'cookie-parser'
import cookieParser from "cookie-parser"
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const app = express()
// middleware para aceptar datos desde Postman
app.use(express.json())
// middleware para aceptar cookies en Postman
app.use(cookieParser())
// monta las rutas de productos en la aplicacion
app.use("/api/products", productsRoutes)
// monta las rutas de clientes en la aplicacion
app.use("/api/customers", customersRoutes)
// monta las rutas de empleados en la aplicacion
app.use("/api/employees", employeesRoutes)
// monta las rutas de sucursales en la aplicacion
app.use("/api/branches", branchesRoutes)
// monta las rutas de reseñas en la aplicacion
app.use("/api/reviews", reviewsRoutes)
// monta las rutas del sign up en la aplicacion
app.use("/api/signup", signupRoutes)
// monta las rutas del login en la aplicacion
app.use("/api/login", loginRoutes)
// montas las rutas del logout en la aplicacion
app.use("/api/logout", logoutRoutes)
// Exporto la constante para poder usar express en otros archivos
export default app