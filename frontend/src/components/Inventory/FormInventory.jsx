import React from 'react'
const RegisterInventory = ({ setProductNameInventory, nameInventory, setCurrentQuantity, currentQuantity, setMinimumStock,  minimumStock, setLastUpdate, lastUpdate, saveInventory, id, handleEdit }) => {
  return (
    <div className="">
      <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre Inventario</label>
          <input type="text" name="name" value={nameInventory} onChange={(e) => setProductNameInventory(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Categoría"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="currentQuantity">Cantidad Actual</label>
            <input type="number" name="currentQuantity" value={currentQuantity} onChange={(e) => setCurrentQuantity(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Cantidad Actual"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="minimumStock">Cantidad Mínima</label>
            <input type="number" name="minimumStock" value={minimumStock} onChange={(e) => setMinimumStock(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Cantidad Mínima"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastUpdate">Última Actualización</label>
            <input type="date" name="lastUpdate" value={lastUpdate} onChange={(e) => setLastUpdate(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Última Actualización"/>
        </div>
        {!id ? (
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={(e) => saveInventory(e)}>
            Guardar
          </button>
        ) : (
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={(e) => handleEdit(e)}>
            Editar
          </button>
        )}
      </form>
    </div>
  )
}
export default RegisterInventory