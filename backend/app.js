// importar todo lo de la libreria "express"
import express from "express";
// importar la constante que contiene el router
import productsRoutes from "./src/routes/products.js";
import customersRoutes from "./src/routes/customers.js";
import employeesRoutes from "./src/routes/employees.js";
import branchesRoutes from "./src/routes/branches.js";
import reviewsRoutes from "./src/routes/reviews.js";
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const app = express();
// middleware para aceptar datos desde postman
app.use(express.json());
// monta las rutas de productos en la aplicacion
app.use("/api/products", productsRoutes);
// monta las rutas de clientes en la aplicacion
app.use("/api/customers", customersRoutes);
// monta las rutas de empleados en la aplicacion
app.use("/api/employees", employeesRoutes);
// monta las rutas de sucursales en la aplicacion
app.use("/api/branches", branchesRoutes);
// monta las rutas de reseñas en la aplicacion
app.use("/api/reviews", reviewsRoutes);
// Exporto la constante para poder usar express en otros archivos
export default app;