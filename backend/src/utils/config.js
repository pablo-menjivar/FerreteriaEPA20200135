import dotenv from "dotenv"
// Ejecuta la configuración de las variables de entorno
dotenv.config()
// Exporta la constante config
export const config = {
  db: {
    URI: process.env.DB_URI
  },
  server: {
    PORT: process.env.PORT
  },
  JWT: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES
  },
  CREDENTIALS: {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD
  },
  APPUSER: {
    USER: process.env.APPUSER,
    PASS: process.env.APPPASS
  }
}