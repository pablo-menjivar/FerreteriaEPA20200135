// Aqui en el controlador, irán todos los metodos (CRUD) que se utilizarán en la ruta de productos
//Array de funciones vacías
const productsController = {};
// Importo el modelo de productos
import productsModel from "../models/Products.js";
// Al parecer todas las funciones son asincronas, esto puede deberse a que se esta trabajando con 
// una base de datos y se necesita tiempo para hacer las operaciones
// CREATE (POST)
productsController.postProducts = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const newProduct = new productsModel({ name, description, price, stock })

  await newProduct.save()
  res.json({ message: "Producto guardado" })
};
// READ (GET)
productsController.getProducts = async (req, res) => {
  const products = await productsModel.find();
  res.json(products);
};
// UPDATE (PUT)
productsController.putProducts = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const updatedProduct = await productsModel.findByIdAndUpdate(req.params.id, { name, description, price, stock }, { new: true });
  res.json({ message: "producto actualizado" });
};
// DELETE (DELETE)
productsController.deleteProducts = async (req, res) => {
  const deleteProduct = await productsModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Producto eliminado" });
};
// READ 1 PRODUCT BY ID
productsController.getProduct = async (req, res) => {
  const product = await productsModel.findById(req.params.id)
  res.json(product)
};
// Exporto el controlador para poder usarlo en otros archivos
export default productsController