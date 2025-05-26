import React from "react"
import Button from "../Button"
const InventoryCard = ({ inventory, deleteInventory, updateInventory }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Inventario: {" "}
          <span className="text-xl font-medium text-gray-700">
            {inventory.productName}{" "}
          </span>
        </h2>
        <p className="text-gray-500 font-bold">{inventory.currentQuantity}</p>
        <p className="text-gray-500 font-bold">{inventory.minimumStock}</p>
        <p className="text-gray-500 font-bold">{inventory.lastUpdate}</p>
        <Button label={"Eliminar"} actionButton={() => deleteInventory(inventory._id)} colorClass={"danger"}/>
        <Button  label={"Editar Información"} actionButton={() => updateInventory(inventory)} colorClass={"warning"} />
      </div>
    </div>
  )
}
export default InventoryCard