import React from "react"
const CardDashboard = ({ label, data }) => {
  let className = ""
  if (label === "Categorias") {
    className =
      "bg-blue-500 hover:bg-blue-700 text-white p-6 rounded-lg shadow-md"
  } else if (label === "Proveedores") {
    className =
      "bg-yellow-500 hover:bg-yellow-700 text-white p-6 rounded-lg shadow-md"
  } else if (label === "Inventario") {
    className =
      "bg-red-500 hover:bg-red-700 text-white p-6 rounded-lg shadow-md"
  } else
    className =
      "bg-gray-500 hover:bg-purple-700 text-white p-6 rounded-lg shadow-md"
  return (
    <div className={className}>
      <h2 className="text-xl font-bold">{label}</h2>
      <p className="text-4xl font-bold mt-4">{data}</p>
    </div>
  )
}
export default CardDashboard