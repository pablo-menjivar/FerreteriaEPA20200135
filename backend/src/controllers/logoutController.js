// Aqui en el controlador, irán el método de CREATE (C) que se utilizará en la ruta de inicio de sesion
//Array de funciones vacías
const logoutController = {}
//POST (CREATE)
logoutController.logout = async (req, res) => {
    //Se borra la cookie que contiene el token para que el usuario no pueda volver a iniciar sesión
    res.clearCookie("authToken")
    res.json({message: "Sesión cerrada correctamente"})
}
export default logoutController