// Aquí esta el controlador, irán todos los metodos (CRUD) que se utilizarán en la ruta de preguntas frecuentes
// Array de funciones vacías
const salesController = {};
// Importo el modelo de ventas
import salesModel from "../models/Sales.js";
// Al parecer todas las funciones son asincronas, esto puede deberse a que se esta trabajando con
// una base de datos y se necesita tiempo para hacer las operaciones
// CREATE (POST)
salesController.postSales = async (req, res) => {
    //1- Solicitar los datos del cuerpo de la solicitud
    const { product, category, customer, total, date } = req.body;
    try {
        //2- Validar que no haya campos vacios
        if (!product || !category || !customer || !total || !date) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }
        const newSale = new salesModel({ product, category, customer, total, date });
        await newSale.save();
        return res.status(200).json({message: "Venta guardada"});
    } catch (error) {
        res.status(500).json({ message: "Error al guardar la venta: " + error.message });
    }
};
// READ (GET) POR CATEGORÍA
salesController.getSalesByCategory = async (req, res) => {
    try {
        const result = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: "$category",
                        totalVentas: { $sum: "$total" }

                    }
                },
                // Ordenar los resultados con $sort
                {
                    $sort: { totalVentas: -1 } // -num: menor a mayor, num: mayor a menor
                }
            ]
        )
        res.status(200).json(result);
    } catch (error) {
        console.log("❌ Error: " + error.message)
        res.status(500).json({ message: "Error al obtener las ventas por categoría: " + error.message });
    }
};
// READ (GET) POR MEJORES VENTAS
salesController.getBestSales = async (req, res) => {
    try {
        const result = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: "$product",
                        cantidadVentas: { $sum: 1 }
                    }
                },
                // Ordenar los resultados con sort
                {
                    $sort: { cantidadVentas: -1 } // -num: menor a mayor, num: mayor a menor
                },
                // Se limita la cantidad de datos a mostrar
                {
                    $limit: 5
                }
            ]
        )
        res.status(200).json(result);
    }
    catch (error) {
        console.log("❌ Error: " + error.message)
        res.status(500).json({ message: "Error al obtener las mejores ventas: " + error.message });
    }
}
// READ (GET) POR CLIENTE CON MAS COMPRAS
salesController.getFrequentCustomers = async (req, res) => {
    try {
        const result = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: "$customer",
                        comprasRealizadas: { $sum: 1 } // positivo
                    }
                },
                // Ordenar los resultados con sort
                {
                    $sort: { comprasRealizadas: -1 } // -num: menor a mayor, num: mayor a menor
                },
                // Se limita la cantidad de datos a mostrar
                {
                    $limit: 3
                }
            ]
        )
        res.status(200).json(result);
    }
    catch (error) {
        console.log("❌ Error: " + error.message)
        res.status(500).json({ message: "Error al obtener los clientes con más compras: " + error.message });
    }
}
// READ (GET) POR GANANCIAS TOTALES
salesController.getTotalProfit = async (req, res) => {
    try {
        const result = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: null,
                        totalGanancias: { $sum: "$total" }
                    }
                }
            ]
        )
        res.status(200).json(result);
    }
    catch (error) {
        console.log("❌ Error: " + error.message)
        res.status(500).json({ message: "Error al obtener las ganancias totales: " + error.message });
    }
};
// READ (GET) POR VENTAS POR MES
salesController.getSalesByMonth = async (req, res) => {
    try {
        const result = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: { año: { $year: "$date" }, mes: { $month: "$date" } },
                        totalVentas: { $sum: "$total" }
                    }
                },
                // Ordenar los resultados con sort
                {
                    $sort: { totalVentas: -1 } // -num: menor a mayor, num: mayor a menor
                }
            ]
        )
        res.status(200).json(result);
    }
    catch (error) {
        console.log("❌ Error: " + error.message)
        res.status(500).json({ message: "Error al obtener las ventas por mes: " + error.message });
    }
}
// Exporto el controlador para poder usarlo en otros archivos
export default salesController;