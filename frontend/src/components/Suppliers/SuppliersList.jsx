import React from "react"
import SuppliersCard from "./SuppliersCard.jsx"

const ListSuppliers = ({ suppliers, loading, deleteSupplier, updateSupplier }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold underline text-center">
        Listado de proveedores
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando...</div>}

        {suppliers?.map((supplier) => (
          <SuppliersCard key={supplier._id} suppliers={supplier} deleteSuppliers={deleteSupplier} updateSuppliers={updateSupplier}/>
        ))}
      </div>
    </div>
  )
}
export default ListSuppliers