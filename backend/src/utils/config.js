import dotenv from "dotenv";
// Ejecuta la configuración de las variables de entorno
dotenv.config();
// Exporta la constante config
export const config = {
  db: {
    URI: process.env.MONGODB_URI || "mongodb://localhost:27017/ferreteriaEPA"
  },
  server: {
    PORT: process.env.PORT || 5000
  }
};