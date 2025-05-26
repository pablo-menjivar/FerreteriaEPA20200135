import React from "react"
import Button from "../Button.jsx"
const SuppliersCard = ({ suppliers, deleteSuppliers, updateSuppliers }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Proveedores: {" "}
          <span className="text-xl font-medium text-gray-700">
            {suppliers.name}{" "}
          </span>
        </h2>
        <p className="text-gray-500 font-bold">{suppliers.contact}</p>
        <p className="text-gray-500 font-bold">{suppliers.phone}</p>
        <p className="text-gray-500 font-bold">{suppliers.address}</p>
        <Button label={"Eliminar"} actionButton={() => deleteSuppliers(suppliers._id)} colorClass={"danger"}/>
        <Button  label={"Editar Información"} actionButton={() => updateSuppliers(suppliers)} colorClass={"warning"} />
      </div>
    </div>
  )
}
export default SuppliersCard