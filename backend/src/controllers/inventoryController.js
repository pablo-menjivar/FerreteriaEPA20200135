// Aquí esta el controlador, irán todos los metodos (CRUD) que se utilizarán en la ruta de inventario
//Array de funciones vacías
const inventoryController = {};
// Importo el modelo de inventario
import inventoryModel from "../models/Inventory.js";
// Al parecer todas las funciones son asincronas, esto puede deberse a que se esta trabajando con
// una base de datos y se necesita tiempo para hacer las operaciones
// CREATE (POST)
inventoryController.postInventory = async (req, res) => {
    const { productName, currentQuantity, minimumStock, lastUpdate } = req.body;
    const newInventory = new inventoryModel({ productName, currentQuantity, minimumStock, lastUpdate });
    await newInventory.save();
    res.json({ message: "Inventario guardado" });
};
// READ (GET)
inventoryController.getInventory = async (req, res) => {
    const inventory = await inventoryModel.find();
    res.json(inventory);
};
// UPDATE (PUT)
inventoryController.putInventory = async (req, res) => {
    const { productName, currentQuantity, minimumStock, lastUpdate } = req.body;
    const updatedInventory = await inventoryModel.findByIdAndUpdate(req.params.id, { productName, currentQuantity, minimumStock, lastUpdate }, { new: true });
    res.json({ message: "Inventario actualizado" });
};
// DELETE (DELETE)
inventoryController.deleteInventory = async (req, res) => {
    const deleteInventory = await inventoryModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Inventario eliminado" });
}
// READ 1 INVENTORY BY ID
inventoryController.getInventory1 = async (req, res) => {
    const inventory = await inventoryModel.findById(req.params.id);
    res.json(inventory);
};
// Exporto el controlador para poder usarlo en otros archivos
export default inventoryController;