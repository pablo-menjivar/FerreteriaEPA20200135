// Aquí en el controlador, irán todos los metodos (CRUD) que se utilizarán en la ruta de clientes
const customersController = {};
// Importo el modelo de clientes
import customersModel from "../models/Customers.js";
// Al parecer todas las funciones son asincronas, esto puede deberse a que se esta trabajando con 
// una base de datos y se necesita tiempo para hacer las operaciones
// CREATE (POST)
customersController.postCustomers = async (req, res) => {
  const { name, lastname, birthday, email, password, phoneNumber, DUI, isVerified } = req.body;
  const newCustomer = new customersModel({ name, lastname, birthday, email, password, phoneNumber, DUI, isVerified });

  await newCustomer.save();
  res.json({ message: "Cliente guardado" });
};
// READ (GET)
customersController.getCustomers = async (req, res) => {
  const customers = await customersModel.find();
  res.json(customers);
};
// UPDATE (PUT)
customersController.putCustomers = async (req, res) => {
  const { name, lastname, birthday, email, password, phoneNumber, DUI, isVerified } = req.body;
  const updatedCustomer = await customersModel.findByIdAndUpdate(req.params.id, { name, lastname, birthday, email, password, phoneNumber, DUI, isVerified }, { new: true });
  res.json({ message: "Cliente actualizado" });
};
// DELETE (DELETE)
customersController.deleteCustomers = async (req, res) => {
  const deleteCustomer = await customersModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Cliente eliminado" });
};
// READ 1 CUSTOMER BY ID
customersController.getCustomer = async (req, res) => {
  const customer = await customersModel.findById(req.params.id);
  res.json(customer);
};
// Exporto el controlador para poder usarlo en otros archivos
export default customersController;