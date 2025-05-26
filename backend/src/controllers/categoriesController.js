// Aquí esta el controlador, irán todos los metodos (CRUD) que se utilizarán en la ruta de categorías
//Array de funciones vacías
const categoriesController = {}; 
// Importo el modelo de categorías
import categoriesModel from "../models/Categories.js"; 
// Al parecer todas las funciones son asincronas, esto puede deberse a que se esta trabajando con
// una base de datos y se necesita tiempo para hacer las operaciones
// CREATE (POST)
categoriesController.postCategories = async (req, res) => {
    const { name, address, phoneNumber, schedule } = req.body;
    const newCategory = new categoriesModel({ name, address, phoneNumber, schedule });
    await newCategory.save();
    res.json({ message: "Categoría guardada" });
};
// READ (GET)
categoriesController.getCategories = async (req, res) => {
    const categories = await categoriesModel.find();
    res.json(categories);
};
// UPDATE (PUT)
categoriesController.putCategories = async (req, res) => {
    const { name, address, phoneNumber, schedule } = req.body;
    const updatedCategory = await categoriesModel.findByIdAndUpdate(req.params.id, { name, address, phoneNumber, schedule }, { new: true });
    res.json({ message: "Categoría actualizada" });
};
// DELETE (DELETE)
categoriesController.deleteCategories = async (req, res) => {
    const deleteCategory = await categoriesModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Categoría eliminada" });
};
// READ 1 CATEGORY BY ID
categoriesController.getCategory = async (req, res) => {
    const category = await categoriesModel.findById(req.params.id);
    res.json(category);
};
// Exporto el controlador para poder usarlo en otros archivos
export default categoriesController;