// Aquí esta el controlador, irán todos los metodos (CRUD) que se utilizarán en la ruta de proveedores
//Array de funciones vacías
const suppliersController = {};
// Importo el modelo de proveedores
import suppliersModel from "../models/Suppliers.js";
// Al parecer todas las funciones son asincronas, esto puede deberse a que se esta trabajando con
// una base de datos y se necesita tiempo para hacer las operaciones
// CREATE (POST)
suppliersController.postSuppliers = async (req, res) => {
    const { name, contact, phone, address } = req.body;
    const newSupplier = new suppliersModel({ name, contact, phone, address });
    await newSupplier.save();
    res.json({ message: "Proveedor guardado" });
};
// READ (GET)
suppliersController.getSuppliers = async (req, res) => {
    const suppliers = await suppliersModel.find();
    res.json(suppliers);
};
// UPDATE (PUT)
suppliersController.putSuppliers = async (req, res) => {
    const { name, contact, phone, address } = req.body;
    const updatedSupplier = await suppliersModel.findByIdAndUpdate(req.params.id, { name, contact, phone, address }, { new: true });
    res.json({ message: "Proveedor actualizado" });
};
// DELETE (DELETE)
suppliersController.deleteSuppliers = async (req, res) => {
    const deleteSupplier = await suppliersModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Proveedor eliminado" });
};
// READ 1 SUPPLIER BY ID
suppliersController.getSupplier = async (req, res) => {
    const supplier = await suppliersModel.findById(req.params.id);
    res.json(supplier);
};
// Exporto el controlador para poder usarlo en otros archivos
export default suppliersController;