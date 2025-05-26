import React from "react"
import InventoryCard from "./InventoryCard.jsx"

const ListCategories = ({ inventory, loading, deleteInventory, updateInventory }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold underline text-center">
        Listado de inventario
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando...</div>}

        {inventory?.map((inventory) => (
          <InventoryCard key={inventory._id} inventory={inventory} deleteInventory={deleteInventory} updateInventory={updateInventory}/>
        ))}
      </div>
    </div>
  )
}
export default ListCategories