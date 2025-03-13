// Aquí esta el controlador, irán todos los metodos (CRUD) que se utilizarán en la ruta de sucursales
const branchesController = {};
// Importo el modelo de sucursales
import branchesModel from "../models/Branches.js";
// Al parecer todas las funciones son asincronas, esto puede deberse a que se esta trabajando con
// una base de datos y se necesita tiempo para hacer las operaciones
// CREATE (POST)
branchesController.postBranches = async (req, res) => {
  const { name, address, phoneNumber, schedule } = req.body;
  const newBranch = new branchesModel({ name, address, phoneNumber, schedule });

  await newBranch.save();
  res.json({ message: "Sucursal guardada" });
};
// READ (GET)
branchesController.getBranches = async (req, res) => {
  const branches = await branchesModel.find();
  res.json(branches);
};
// UPDATE (PUT)
branchesController.putBranches = async (req, res) => {
  const { name, address, phoneNumber, schedule } = req.body;
  const updatedBranch = await branchesModel.findByIdAndUpdate(req.params.id, { name, address, phoneNumber, schedule }, { new: true });
  res.json({ message: "Sucursal actualizada" });
};
// DELETE (DELETE)
branchesController.deleteBranches = async (req, res) => {
  const deleteBranch = await branchesModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Sucursal eliminada" });
};
// READ 1 BRANCH BY ID
branchesController.getBranch = async (req, res) => {
  const branch = await branchesModel.findById(req.params.id);
  res.json(branch);
};
// Exporto el controlador para poder usarlo en otros archivos
export default branchesController;