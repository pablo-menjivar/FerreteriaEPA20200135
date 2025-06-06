// Aquí esta el controlador, irán todos los metodos (CRUD) que se utilizarán en la ruta de preguntas frecuentes
//Array de funciones vacías
const faqController = {};
// Importo el modelo de preguntas frecuentes
import faqModel from "../models/Faq.js";
// Al parecer todas las funciones son asincronas, esto puede deberse a que se esta trabajando con
// una base de datos y se necesita tiempo para hacer las operaciones
// CREATE (POST)
faqController.postFaq = async (req, res) => {
    //1- Solicitar los datos del cuerpo de la solicitud
    const { question, answer, level, isActive } = req.body;
    try {
        //2- Validaciones
        //2.1- Validar que no haya campos vacíos
        if (!question || !answer || !level || isActive === undefined) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }
        //2.2- Validar que el nivel sea un número entre 1 y 10
        if (level < 1 || level > 10) {
            return res.status(400).json({ message: "El nivel debe ser un número entre 1 y 10" });
        }
        //2.3- Validar que la pregunta y la respuesta no tengan una longitud menor a 4 (o 40) o mayor a 100 (o 1000)
        if (question.length < 4 || question.length > 100 || answer.length < 40 || answer.length > 1000) {
            return res.status(400).json({ message: "La pregunta y la respuesta deben tener una longitud entre 4 y 100 (o 40 y 1000)" });
        }
        const newFaq = new faqModel({ question, answer, level, isActive });
        await newFaq.save();
        return res.status(200).json({message: "Pregunta frecuente guardada"});
    } catch (error) {
        res.status(500).json({ message: "Error al guardar la pregunta: " + error.message });
    }
};
// READ (GET)
faqController.getFaqs = async (req, res) => {
    try {
        const faqs = await faqModel.find();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las preguntas: " + error.message });
    }
};
// UPDATE (PUT)
faqController.putFaq = async (req, res) => {
    //1- Solicitar los datos del cuerpo de la solicitud
    const { question, answer, level, isActive } = req.body;
    try {
        //2- Validaciones
        //2.1- Validar que el nivel sea un número entre 1 y 10
        if (level < 1 || level > 10) {
            return res.status(400).json({ message: "El nivel debe ser un número entre 1 y 10" });
        }
        //2.2- Validar que la pregunta y la respuesta no tengan una longitud menor a 4 (o 40) o mayor a 100 (o 1000)
        if (question.length < 4 || question.length > 100 || answer.length < 40 || answer.length > 1000) {
            return res.status(400).json({ message: "La pregunta y la respuesta deben tener una longitud entre 4 y 100 (o 40 y 1000)" });
        }
        const faq = await faqModel.findByIdAndUpdate(req.params.id, { question, answer, level, isActive }, { new: true });
        if (!faq) {
            return res.status(400).json({ message: "Pregunta no encontrada" });
        }
        return res.status(200).json(faq);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la pregunta: " + error.message });
    }
};
// DELETE (DELETE)
faqController.deleteFaq = async (req, res) => {
    try {
        const faq = await faqModel.findByIdAndDelete(req.params.id);
        if (!faq) {
            return res.status(400).json({ message: "Pregunta no encontrada" });
        }
        return res.status(200).json({ message: "Pregunta eliminada" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la pregunta: " + error.message });
    }
};
// READ 1 FAQ BY ID
faqController.getFaq = async (req, res) => {
    try {
        const faq = await faqModel.findById(req.params.id);
        if (!faq) {
            return res.status(400).json({ message: "Pregunta no encontrada" });
        }
        return res.status(200).json(faq);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la pregunta: " + error.message });
    }
};
// Exporto el controlador para poder usarlo en otros archivos
export default faqController;