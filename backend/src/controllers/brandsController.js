// Aqui en el controlador, irán el método de CREATE (C) que se utilizará en la ruta de subir imágenes
//Array de funciones vacías
const brandsController = {}
// Importo el modelo de empleados
import brandsModel from "../models/Brands.js"
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
brandsController.postBrand = async (req, res) => {
    const { name, year, slogan } = req.body
    let imageURL = ""

    // Subir la imagen a Cloudinary utilizando la API
    if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "public",
            allowed_formats: ["jpg", "jpeg", "png", "gif"],
        })
        imageURL = result.secure_url
    }
    // Crear un nuevo registro de una marca en la base de datos
    const newBrand = new brandsModel({ name, year, slogan, image: imageURL })
    await newBrand.save()
    res.json({ message: "Marca guardada"})
},
// GET (READ)
brandsController.getBrands = async (req, res) => {
    const brand = await brandsModel.find()
    res.json(brand)
}
// PUT (UPDATE)
brandsController.putBrand = async (req, res) => {
    const { name, year, slogan } = req.body
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
    await brandsModel.findByIdAndUpdate(req.params.id, {name, year, slogan, image: imageURL }, { new: true })
    res.json({ message: "Marca actualizada"})
}
// DELETE (DELETE)
brandsController.deleteBrand = async (req, res) => {
    const deleteBrand = await brandsModel.findByIdAndDelete(req.params.id)
    if (!deleteBrand) {
        return res.status(404).json({ message: "Marca no encontrada" })
    }
    res.json({ message: "Marca eliminada" })
}
// GET 1 PROVIDER BY ID
brandsController.getBrand = async (req, res) => {
    const brand = await brandsModel.findById(req.params.id)
    res.json(brand)
}
// Exporto el controlador para poder usarlo en otros archivos
export default brandsController