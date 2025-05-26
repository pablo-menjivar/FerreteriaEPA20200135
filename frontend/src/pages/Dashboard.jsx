import React, { useEffect, useState } from "react"
import CardDashboard from "../components/CardDashboard"

const Dashboard = () => {
  const [data, setData] = useState({
    categories: 0,
    suppliers: 0,
    inventory: 0
  })
  const fetchData = async () => {
    try {
      const categoriesResponse = await fetch("http://localhost:5000/api/categories")
      const suppliersResponse = await fetch("http://localhost:5000/api/suppliers")
      const inventoryResponse = await fetch("http://localhost:6000/api/inventory")

      const categoriesData = await categoriesResponse.json()
      const suppliersData = await suppliersResponse.json()
      const inventoryData = await inventoryResponse.json()

      setData({
        categories: categoriesData.length,
        suppliers: suppliersData.length,
        products: inventoryData.length
      })
    } catch (error) {
      console.error("Error al obtener datos: ", error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardDashboard label="Empleados" data={data.categories}/>
          <CardDashboard label="Marcas" data={data.suppliers}/>
          <CardDashboard label="Modelos" data={data.inventory}/>
        </div>
      </div>
    </div>
  )
}
export default Dashboard