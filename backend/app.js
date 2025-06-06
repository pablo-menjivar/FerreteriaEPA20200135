// importar todo lo de la libreria "express"
import express from "express"
// importar todo lo de la libreria "cors"
import cors from "cors"
// importar la constante que contiene el router
import productsRoutes from "./src/routes/products.js"
import customersRoutes from "./src/routes/customers.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
import reviewsRoutes from "./src/routes/reviews.js"
import providersRoutes from "./src/routes/providers.js"
import brandsRoutes from "./src/routes/brands.js"
import categoriesRoutes from "./src/routes/categories.js"
import suppliersRoutes from "./src/routes/suppliers.js"
import inventoryRoutes from "./src/routes/inventory.js"
import faqRoutes from "./src/routes/faq.js"
import signupRoutes from "./src/routes/signup.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
import signupCustomerRoutes from "./src/routes/signupCustomer.js"
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"
import { validateAuthToken } from "./src/middlewares/validateAuthToken.js"
//Importo todo lo de la libreria  'cookie-parser'
import cookieParser from "cookie-parser"
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const app = express()
// middleware para aceptar datos desde Postman
app.use(express.json())
// middleware para aceptar cookies en Postman
app.use(cookieParser())
// middleware para usar cors en el Frontend
app.use(cors({origin: "http://localhost:5173", credentials: true, methods: ["GET", "POST", "PUT", "DELETE"], allowedHeaders: ["Content-Type", "Authorization"]}))
// monta las rutas de productos en la aplicacion
app.use("/api/products", productsRoutes)
// monta las rutas de clientes en la aplicacion
app.use("/api/customers", customersRoutes)
// monta las rutas de empleados en la aplicacion
app.use("/api/employees", validateAuthToken(["admin", "employee"]), employeesRoutes)
// monta las rutas de sucursales en la aplicacion
app.use("/api/branches", branchesRoutes)
// monta las rutas de reseñas en la aplicacion
app.use("/api/reviews", reviewsRoutes)
// monta las rutas de proveedores en la aplicacion
app.use("/api/providers", validateAuthToken(["admin"]), providersRoutes)
// monta las rutas de marcas en la aplicacion
app.use("/api/brands", brandsRoutes)
// monta las rutas de categoría en la aplicacion
app.use("/api/categories", categoriesRoutes)
// monta las rutas de proveedores en la aplicacion
app.use("/api/suppliers", suppliersRoutes)
// monta las rutas del inventario en la aplicacion
app.use("/api/inventory", inventoryRoutes)
// monta las rutas de las preguntas frecuentes en la aplicacion
app.use("/api/faqs", faqRoutes)
// monta las rutas del sign up en la aplicacion
app.use("/api/signup", validateAuthToken(["admin"]), signupRoutes)
// monta las rutas del login en la aplicacion
app.use("/api/login", loginRoutes)
// montas las rutas del logout en la aplicacion
app.use("/api/logout", logoutRoutes)
// monta las rutas del sign up del cliente en la aplicacion
app.use("/api/signupCustomers", signupCustomerRoutes)
// monta las rutas del recuperar contraseña en la aplicacion
app.use("/api/recoveryPassword", recoveryPasswordRoutes)
// monta las rutas del validar el jsonwebtoken en la aplicacion
app.use("/api/validateAuthToken", validateAuthToken)
// Exporto la constante para poder usar express en otros archivos
export default app