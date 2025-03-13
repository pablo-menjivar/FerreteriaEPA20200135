import mongoose from "mongoose";
//1- Configurar la URI de la base de datos
const URI = "mongodb://localhost:27017/ferreteriaEPA";
//2- Conecto la base de datos
mongoose.connect(URI);
// -------- Comprobar que todo funciona ----------
const connection = mongoose.connection;
//veo si funciona
connection.once("open", () => {
  console.log("DB is connected");
});
//veo si se desconectó
connection.on("disconnected", () => {
  console.log("DB is disconnected");
});
//veo si hay un error
connection.on("error", () => {
  console.log("Error connecting to the database");
});