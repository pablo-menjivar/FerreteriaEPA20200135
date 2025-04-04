// Aquí esta el controlador, irán todos los metodos (CRUD) que se utilizarán en la ruta de empleados
//Array de funciones vacías
const employeesController = {};
// Importo el modelo de empleados
import employeesModel from "../models/Employees.js";
// Al parecer todas las funciones son asincronas, esto puede deberse a que se esta trabajando con
// una base de datos y se necesita tiempo para hacer las operaciones
// CREATE (POST)
employeesController.postEmployees = async (req, res) => {
  const { name, lastName, birthday, email, address, hireDate, password, phoneNumber, DUI, issNumber, isVerified } = req.body;
  const newEmployee = new employeesModel({ name, lastName, birthday, email, address, hireDate, password, phoneNumber, DUI, issNumber, isVerified });

  await newEmployee.save();
  res.json({ message: "Empleado guardado" });
};
// READ (GET)
employeesController.getEmployees = async (req, res) => {
  const employees = await employeesModel.find();
  res.json(employees);
};
// UPDATE (PUT)
employeesController.putEmployees = async (req, res) => {
  const { name, lastName, birthday, email, address, hireDate, password, phoneNumber, DUI, issNumber, isVerified } = req.body;
  const updatedEmployee = await employeesModel.findByIdAndUpdate(req.params.id, { name, lastName, birthday, email, address, hireDate, password, phoneNumber, DUI, issNumber, isVerified }, { new: true });
  res.json({ message: "Empleado actualizado" });
};
// DELETE (DELETE)
employeesController.deleteEmployees = async (req, res) => {
  const deleteEmployee = await employeesModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Empleado eliminado" });
};
// READ 1 EMPLOYEE BY ID
employeesController.getEmployee = async (req, res) => {
  const employee = await employeesModel.findById(req.params.id);
  res.json(employee);
};
// Exporto el controlador para poder usarlo en otros archivos
export default employeesController;