import React from "react"
import ListSuppliers from "../components/Suppliers/ListSuppliers.jsx"
import FormSuppliers from "../components/Suppliers/FormSuppliers.jsx"
import useDataSuppliers from "../components/Suppliers/hooks/useDataSuppliers.jsx"

const Suppliers = () => {
  const {
    activeTab, setActiveTab,
    id,
    supplierName, setSupplierName,
    contactInfo, setContactInfo,
    address, setAddress,
    suppliers,
    loading,
    saveSupplier,
    deleteSupplier,
    updateSupplier,
    handleEdit
  } = useDataSuppliers()
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Proveedores</h1>
        <div>
          <div className="flex border-b border-gray-200 mb-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500" onClick={() => setActiveTab("list")}>
              Lista de proveedores
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500" onClick={() => setActiveTab("form")}>
              Gestionar Proveedor
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <ListSuppliers suppliers={suppliers} loading={loading} deleteSupplier={deleteSupplier} updateSupplier={updateSupplier}/>
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <FormSuppliers setSupplierName={setSupplierName} setContactInfo={setContactInfo} setAddress={setAddress} saveSupplier={saveSupplier} supplierName={supplierName} contactInfo={contactInfo} address={address} id={id} handleEdit={handleEdit}/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Suppliers