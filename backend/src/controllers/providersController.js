// Aqui en el controlador, irán el método de CREATE (C) que se utilizará en la ruta de subir imágenes
//Array de funciones vacías
const providersController = {}
// Importo el modelo de empleados
import providersModel from "../models/Providers.js"
// Importo la librería `cloudinary`
import { v2 as cloudinary } from 'cloudinary'
// Importo el archivo 'config'
import { config } from "../utils/config.js"
// Siempre se tendrá que configurar Cloudinary primero para que funcione
cloudinary.config({
    cloud_name: config.CLOUDINARY.CLOUD_NAME,
    api_key: config.CLOUDINARY.API_KEY,
    api_secret: config.CLOUDINARY.API_SECRET
})
// POST (CREATE)
providersController.postProvider = async (req, res) => {
    const { name, phoneNumber } = req.body
    let imageURL = ""

    // Subir la imagen a Cloudinary utilizando la API
    if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "public",
            allowed_formats: ["jpg", "jpeg", "png", "gif"],
        })
        imageURL = result.secure_url
    }
    // Crear un nuevo proveedor en la base de datos
    const newProvider = new providersModel({ name, phoneNumber, image: imageURL })
    await newProvider.save()
    res.json({ message: "Proveedor guardado"})
},
// GET (READ)
providersController.getProviders = async (req, res) => {
    const provider = await providersModel.find()
    res.json(provider)
}
// PUT (UPDATE)
providersController.putProvider = async (req, res) => {
    const { name, phoneNumber } = req.body
    let imageURL = ""
    // Subir la imagen a Cloudinary utilizando la API
    if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "public",
            allowed_formats: ["jpg", "jpeg", "png", "gif"],
        })
        imageURL = result.secure_url
    }
    // Actualizar el proveedor en la base de datos
    await providersModel.findByIdAndUpdate(req.params.id, { name, phoneNumber, image: imageURL }, { new: true })
    res.json({ message: "Proveedor actualizado"})
}
// DELETE (DELETE)
providersController.deleteProvider = async (req, res) => {
    const deleteProvider = await providersModel.findByIdAndDelete(req.params.id)
    if (!deleteProvider) {
        return res.status(404).json({ message: "Proveedor no encontrado" })
    }
    res.json({ message: "Proveedor eliminado" })
}
// GET 1 PROVIDER BY ID
providersController.getProvider = async (req, res) => {
    const provider = await providersModel.findById(req.params.id)
    res.json(provider)
}
// Exporto el controlador para poder usarlo en otros archivos
export default providersController