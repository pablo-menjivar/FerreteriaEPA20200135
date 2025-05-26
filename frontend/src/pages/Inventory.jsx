import React from "react"
import ListInventory from "../components/Inventory/InventoryList.jsx"
import FormInventory from "../components/Inventory/FormInventory.jsx"
import useDataInventory from "../components/Inventory/hooks/useDataInventory.jsx"

const Inventory = () => {
  const {
    activeTab, setActiveTab,
    id,
    productName, setProductName,
    currentQuantity, setCurrentQuantity,
    minimumStock, setMinimumStock,
    lastUpdate, setLastUpdate,
    inventory,
    loading,
    saveInventory,
    deleteInventory,
    updateInventory,
    handleEdit
  } = useDataInventory()

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Inventario</h1>
        <div>
          <div className="flex border-b border-gray-200 mb-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500" onClick={() => setActiveTab("list")}>
              Lista de inventario
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500" onClick={() => setActiveTab("form")}>
              Gestionar Inventario
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <ListInventory inventory={inventory} loading={loading} deleteInventory={deleteInventory} updateInventory={updateInventory}/>
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <FormInventory setProductNameInventory={setProductName} setCurrentQuantity={setCurrentQuantity} setMinimumStock={setMinimumStock} setLastUpdate={setLastUpdate} saveInventory={saveInventory} productName={productName} currentQuantity={currentQuantity} minimumStock={minimumStock} lastUpdate={lastUpdate} id={id} handleEdit={handleEdit}/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Inventory