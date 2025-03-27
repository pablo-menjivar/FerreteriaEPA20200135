// Aquí en el controlador, irán todos los métodos (CRUD) que se utilizarán en la ruta de productos
//Array de funciones vacías
const reviewsController = {};
// Importo el modelo de reseñas
import reviewsModel from "../models/Reviews.js";
// Al parecer todas las funciones son asíncronas, esto puede deberse a que se está trabajando con
// una base de datos y se necesita tiempo para hacer las operaciones
// CREATE (POST)
reviewsController.postReviews = async (req, res) => {
  const { comment, rating, idCustomer } = req.body;
  const newReview = new reviewsModel({ comment, rating, idCustomer });

  await newReview.save();
  res.json({ message: "Reseña guardada" });
};
// READ (GET)
reviewsController.getReviews = async (req, res) => {
  const reviews = await reviewsModel.find().populate("idCustomer");
  res.json(reviews);
};
// UPDATE (PUT)
reviewsController.putReviews = async (req, res) => {
  const { comment, rating, idCustomer } = req.body;
  await reviewsModel.findByIdAndUpdate(req.params.id, {comment, rating, idCustomer});
  res.json({ message: "Reseña actualizada" });
};
// DELETE (DELETE)
reviewsController.deleteReviews = async (req, res) => {
  const deleteReview = await reviewsModel.findByIdAndDelete(req.params.id);
  if (!deleteReview) {
    return res.status(404).json({ message: "Reseña no encontrada" });
  }
  res.json({ message: "Reseña eliminada" });
};
// READ 1 REVIEW BY ID
reviewsController.getReview = async (req, res) => {
  const review = await reviewsModel.findById(req.params.id).populate("idCustomer");
  res.json(review);
};
// Exporto el controlador para poder usarlo en otros archivos
export default reviewsController;